import { Book, FilterOptions, BookDataServiceResult } from '../../types'

type FilterFn = (book: Book) => boolean

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

export const DataService = {
  filter: function(rawBooks: Book[], filter: Partial<FilterOptions>) {
    const result: BookDataServiceResult = {
      stats: {
        bookCount: 0,
        pageCount: 0,
        ratingCount: 0
      },
      books: []
    }

    const filters = [
      filterFns.year(filter),
      filterFns.month(filter),
      filterFns.rating(filter)
    ]

    rawBooks
      .filter(book => filters.every(fn => fn(book)))
      .sort((book1, book2) => (book1.date_read > book2.date_read ? -1 : 1))
      .reduce((acc, book) => {
        const { stats, books } = result
        books.push(formatResult(book))

        stats.bookCount += 1
        stats.pageCount += book.number_of_pages
        stats.ratingCount += book.my_rating

        return acc
      }, result)

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
