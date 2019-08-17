import { format, subYears, subMonths } from 'date-fns'
import mocker from 'mocker-data-generator'

import { Book } from '../types'

const randomInt = (limit = 5) => Math.floor(Math.random() * (limit + 1))
const randomPastYear = () => format(subYears(new Date(), randomInt(40)), 'YYYY')
const randomPastDate = () =>
  format(subMonths(new Date(), randomInt(5)), 'YYYY-MM-DD')

const bookSchema = {
  'Book Id': {
    // number
    faker: 'random.number'
  },
  Title: {
    // string
    faker: 'lorem.words'
  },
  Author: {
    // string
    faker: 'name.findName'
  },
  'Author l-f': {
    // string
    function: function() {
      const name = (this as any).object.Author
      const nameList = name.split(' ').reverse()
      return nameList.join(', ')
    }
  },
  'Additional Authors': {
    // string
    faker: 'name.findName'
  },
  ISBN: {
    // number
    faker: 'random.number'
  },
  ISBN13: {
    // number
    faker: 'random.number'
  },
  'My Rating': {
    // number
    function: function() {
      return randomInt(5)
    }
  },
  'Average Rating': {
    // number
    function: function() {
      return randomInt(5)
    }
  },
  Publisher: {
    // string
    faker: 'company.companyName'
  },
  Binding: {
    // string
    faker: 'lorem.word'
  },
  'Number of Pages': {
    // number
    faker: 'random.number'
  },
  'Year Published': {
    // number
    function: randomPastYear
  },
  'Original Publication Year': {
    // number
    function: randomPastYear
  },
  'Date Read': {
    // string
    function: randomPastDate
  },
  'Date Added': {
    // string
    function: randomPastDate
  },
  Bookshelves: {
    // string
    faker: 'lorem.word'
  },
  'Bookshelves with positions': {
    // string
    faker: 'lorem.word'
  },
  'Exclusive Shelf': {
    // string
    faker: 'lorem.word'
  },
  'My Review': {
    // string
    faker: 'lorem.paragraph'
  },
  Spoiler: {
    // string
    faker: 'lorem.paragraph'
  },
  'Private Notes': {
    // string
    faker: 'lorem.paragraph'
  },
  'Read Count': {
    // string
    faker: 'random.number'
  },
  'Recommended For': {
    // string
    faker: 'name.findName'
  },
  'Recommended By': {
    // string
    faker: 'name.findName'
  },
  'Owned Copies': {
    // number
    faker: 'random.number'
  },
  'Original Purchase Date': {
    // string
    function: randomPastDate
  },
  'Original Purchase Location': {
    // string
    faker: 'company.companyName'
  },
  Condition: {
    // string
    faker: 'lorem.word'
  },
  'Condition Description': {
    // string
    faker: 'lorem.sentence'
  },
  BCID: {
    // string
    faker: 'random.number'
  }
}

export const generateBook = async () => {
  const mocked = await mocker()
    .schema('book', bookSchema, 1)
    .build()

  return mocked.book[0] as Book
}

export const generateBookList = async (
  numberOfBooks = 5,
  overrides?: Partial<Book>
) => {
  const mocked = await mocker()
    .schema('books', bookSchema, numberOfBooks)
    .build()

  let books = mocked.books as Book[]
  if (overrides) {
    books = books.map(book => ({ ...book, ...overrides }))
  }

  return books
}
