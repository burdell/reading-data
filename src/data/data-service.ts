// tslint:disable:typedef

import { map, indexOf, each, chain, isUndefined, isNull } from 'lodash'

import { Book } from '../components/types'
import { getBooks } from './api'

function formatResult(data: any) {
  return map(data, book => {
    const isbn = book.ISBN
    const parsedISBN = isbn.match(/="(.+)"/)
    book.ISBN = parsedISBN ? parsedISBN[1] : isbn

    return book
  })
}

export default class DataService {
  private filterFns: any[]

  constructor() {
    this.filterFns = []
  }

  read(read = true) {
    this.filterFns.push((book: Book) => {
      const isRead = !!book['Date Read']
      return read === isRead
    })

    return this
  }

  year(desiredYears: any, dateAttribute = 'Date Read') {
    this.filterFns.push((book: any) => {
      const date = book[dateAttribute]
      if (!date) {
        return false
      }

      const year = date.split('/').shift()
      return indexOf(desiredYears, Number(year)) >= 0
    })

    return this
  }

  month(desiredMonths: any, dateAttribute = 'Date Read') {
    this.filterFns.push((book: any) => {
      const date = book[dateAttribute]
      if (!date) {
        return false
      }

      const month = date.split('/')[1]
      return indexOf(desiredMonths, Number(month)) >= 0
    })

    return this
  }

  rating(desiredRatings: any) {
    this.filterFns.push((book: any) => {
      const bookRating = Number(book['My Rating'])
      return indexOf(desiredRatings, bookRating) >= 0
    })

    return this
  }

  filter(options: any) {
    each(options, (value, key) => {
      if (isUndefined(value) || isNull(value) || value.length === 0) {
        return
      }
      const filterFn = (this as any)[key]
      if (filterFn) {
        ;(this as any)[key](value)
      }
    })

    return this.value()
  }

  async value() {
    let pageCount = 0
    let ratingCount = 0

    const rawData = await getBooks()
    const readingData = formatResult(
      rawData.data.records.map((book: any) => book.fields)
    )

    const books = chain(readingData)
      .filter(book => {
        let bookIsValid = true
        each(this.filterFns, fn => {
          let valid = fn(book)
          if (!valid) {
            bookIsValid = false
          }
        })

        if (bookIsValid) {
          pageCount += Number(book['Number of Pages']) || 0
          ratingCount += Number(book['My Rating'])
        }

        return bookIsValid
      })
      .orderBy(book => book['Date Read'], 'desc')
      .valueOf()

    this.filterFns = []

    return {
      books,
      stats: {
        bookCount: books.length,
        pageCount,
        ratingCount
      }
    }
  }
}
