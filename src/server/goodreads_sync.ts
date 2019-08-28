import { config } from 'dotenv'
import axios from 'axios'
import parser from 'fast-xml-parser'
import { addDays, endOfDay, isWithinInterval, format } from 'date-fns'

import { GoodreadsAPIReadEvent, BookWithoutId } from './types'
import { addToDb } from './db'

config()

const { GOODREADS_KEY, GOODREADS_USER } = process.env
const goodreadsApi = `https://www.goodreads.com/review/list/${GOODREADS_USER}.xml?key=${GOODREADS_KEY}&v=2&shelf=read&per_page=20&page=1`

async function main() {
  const { data } = await axios.get(goodreadsApi)
  const booksToAdd = getReadBooks(data)
    .filter(bookReadInLastDay)
    .map(convertApiBook)

  if (!booksToAdd.length) return

  addToDb(booksToAdd)
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

function getReadBooks(xmlData: any): GoodreadsAPIReadEvent[] {
  const jsonData = getJson(xmlData)
  const readBooks = jsonData.GoodreadsResponse.reviews.review
  readBooks[0].read_at = 'Mon Aug 25 21:44:15 -0700 2019'
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

main()
