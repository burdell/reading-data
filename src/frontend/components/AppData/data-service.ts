import { Book, FilterOptions, BookDataServiceResult } from '../../types'

type FilterFn = (book: Book) => boolean

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

function NoOp() {
  return true
}

const filterFns: { [s: string]: (o: Partial<FilterOptions>) => FilterFn } = {
  year: function(options) {
    const desiredYears = options.year
    if (!desiredYears || !desiredYears.length) return NoOp

    return book => {
      const date = book.date_read
      if (!date) {
        return false
      }

      const year = date.split('/').shift()
      return desiredYears.indexOf(Number(year)) >= 0
    }
  },

  month: function(options) {
    const desiredMonths = options.month
    if (!desiredMonths || !desiredMonths.length) return NoOp

    return book => {
      const date = book.date_read
      if (!date) {
        return false
      }

      const month = Number(date.split('/')[1])
      return desiredMonths.indexOf(month) >= 0
    }
  },

  rating: function(options) {
    const desiredRatings = options.rating
    if (!desiredRatings || !desiredRatings.length) return NoOp

    return book => {
      const bookRating = Number(book.my_rating)
      return desiredRatings.indexOf(bookRating) >= 0
    }
  }
}

export class DataService {
  private filterFns: FilterFn[]

  constructor() {
    this.filterFns = []

    this.addFilter = this.addFilter.bind(this)
    this.bookIsValid = this.bookIsValid.bind(this)
  }

  bookIsValid(book: Book) {
    return this.filterFns.every(fn => {
      return fn(book)
    })
  }

  addFilter(filterName: string, options: Partial<FilterOptions>) {
    const filter = getProperty(filterFns, filterName)
    if (filter) {
      this.filterFns.push(filter(options))
    }

    return this
  }

  filter(
    rawBooks: Book[],
    filter: Partial<FilterOptions>
  ): BookDataServiceResult {
    const result: BookDataServiceResult = {
      stats: {
        bookCount: 0,
        pageCount: 0,
        ratingCount: 0
      },
      books: []
    }

    this.filterFns.push(filterFns.year(filter))
    this.filterFns.push(filterFns.month(filter))
    this.filterFns.push(filterFns.rating(filter))

    rawBooks
      .filter(this.bookIsValid)
      .sort((book1, book2) => (book1.date_read > book2.date_read ? -1 : 1))
      .reduce((acc, book) => {
        const { stats, books } = result
        books.push(formatResult(book))
        stats.bookCount += 1
        stats.pageCount += book.number_of_pages
        stats.ratingCount += book.my_rating

        return acc
      }, result)

    this.filterFns = []
    return result
  }
}

function formatResult(rawBook: Book) {
  const book = { ...rawBook }
  const isbn = book.isbn
  if (isbn) {
    const parsedISBN = isbn.match(/="(.+)"/)
    book.isbn = parsedISBN ? parsedISBN[1] : isbn
  }

  return book
}
