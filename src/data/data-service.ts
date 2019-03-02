// tslint:disable:typedef

import { map, indexOf, each, chain, isUndefined, isNull } from 'lodash'

import { ReadingData } from './data'

function formatResult(data) {
  return map(data, book => {
    const isbn = book.ISBN
    const parsedISBN = isbn.match(/="(.+)"/)
    book.ISBN = parsedISBN ? parsedISBN[1] : isbn

    return book
  })
}

export default class DataService {
  private readingData: any[]
  private filterFns: any[]

  constructor() {
    this.readingData = []

    this.filterFns = []
    this.readingData = formatResult(ReadingData)
  }

  read(read = true) {
    this.filterFns.push(book => {
      const isRead = !!book['Date Read']
      return read === isRead
    })

    return this
  }

  year(desiredYears, dateAttribute = 'Date Read') {
    this.filterFns.push(book => {
      const date = book[dateAttribute]
      if (!date) {
        return false
      }

      const year = date.split('/').shift()
      return indexOf(desiredYears, Number(year)) >= 0
    })

    return this
  }

  month(desiredMonths, dateAttribute = 'Date Read') {
    this.filterFns.push(book => {
      const date = book[dateAttribute]
      if (!date) {
        return false
      }

      const month = date.split('/')[1]
      return indexOf(desiredMonths, Number(month)) >= 0
    })

    return this
  }

  rating(desiredRatings) {
    this.filterFns.push(book => {
      const bookRating = Number(book['My Rating'])
      return indexOf(desiredRatings, bookRating) >= 0
    })

    return this
  }

  filter(options) {
    each(options, (value, key) => {
      if (isUndefined(value) || isNull(value) || value.length === 0) {
        return
      }
      const filterFn = this[key]
      if (filterFn) {
        this[key](value)
      }
    })

    return this.value()
  }

  value() {
    let pageCount = 0
    let ratingCount = 0

    const books = chain(this.readingData)
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
