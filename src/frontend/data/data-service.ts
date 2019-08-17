import { Book, FilterOptions, BookDataServiceResult } from '../types'

type FilterFn = (book: Book) => boolean

export class DataService {
  private filterFns: FilterFn[]

  constructor() {
    this.filterFns = []
  }

  year(desiredYears: number[]) {
    this.filterFns.push(book => {
      const date = book.date_read
      if (!date) {
        return false
      }

      const year = date.split('/').shift()
      return desiredYears.indexOf(Number(year)) >= 0
    })

    return this
  }

  month(desiredMonths: number[]) {
    this.filterFns.push(book => {
      const date = book.date_read
      if (!date) {
        return false
      }

      const month = date.split('/')[1]
      return desiredMonths.indexOf(Number(month)) >= 0
    })

    return this
  }

  rating(desiredRatings: number[]) {
    this.filterFns.push(book => {
      const bookRating = Number(book.my_rating)
      return desiredRatings.indexOf(bookRating) >= 0
    })

    return this
  }

  filter(
    books: Book[],
    options: Partial<FilterOptions>
  ): BookDataServiceResult {
    // each(options, (value, key) => {
    //   const filterFn = (this as DataService)[key]
    //   if (filterFn) {
    //     ;(this as any)[key](value)
    //   }
    // })

    // return this.value()
    return {
      books,
      stats: {
        bookCount: books.length,
        pageCount: 0,
        ratingCount: 0
      }
    }
  }
}

function formatResult(data: Book[]) {
  return data.map(book => {
    const isbn = book.isbn
    if (isbn) {
      const parsedISBN = isbn.match(/="(.+)"/)
      book.isbn = parsedISBN ? parsedISBN[1] : isbn
    }

    return book
  })
}
