import axios from 'axios'
import parser from 'fast-xml-parser'
import { addDays, endOfDay, isWithinInterval, format } from 'date-fns'

import { GoodreadsAPIReadEvent, BookWithoutId } from '../types'
import { addToDb } from '../db'

export async function syncGoodreads(apiKey: string, user: string) {
  const goodreadsApi = `https://www.goodreads.com/review/list/${user}.xml?key=${apiKey}&v=2&shelf=read&per_page=20&page=1`
  const { data } = await axios.get(goodreadsApi)

  const booksToAdd = parseBookData(data)
    .filter(bookReadInLastDay)
    .map(convertApiBook)

  if (booksToAdd.length) {
    const booksAdded = await addToDb(booksToAdd)
    return booksAdded
  }

  return booksToAdd.length
}

function convertApiBook({
  book,
  rating,
  read_at,
  body
}: GoodreadsAPIReadEvent): BookWithoutId {
  return {
    book_id: book.id,
    title: book.title,
    author: book.authors.author.name,
    my_rating: rating,
    number_of_pages: Number(book.num_pages),
    date_read: format(new Date(read_at), 'yyyy/MM/dd'),
    my_review: body,
    isbn: `\=${book.isbn}`,
    isbn_13: `\=${book.isbn13 ? book.isbn13.toString() : ''}`
  }
}

function parseBookData(xmlData: any): GoodreadsAPIReadEvent[] {
  const jsonData = getJson(xmlData)
  const readBooks = jsonData.GoodreadsResponse.reviews.review
  return readBooks
}

function bookReadInLastDay(book: GoodreadsAPIReadEvent) {
  const now = Date.now()
  const start = addDays(now, -1)
  start.setHours(0)
  start.setMinutes(0)
  const end = endOfDay(start)

  return isWithinInterval(new Date(book.read_at), { start, end })
}

function getJson(xmlData: any) {
  var tObj = parser.getTraversalObj(xmlData)
  return parser.convertToJson(tObj)
}
