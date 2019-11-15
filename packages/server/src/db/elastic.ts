import { Client } from '@elastic/elasticsearch'

import { getAllBooks } from './dynamo'
import { Book } from '../types'

const ELASTIC_URL = 'http://localhost:9200'

const es = new Client({ node: ELASTIC_URL })

export const BookMapping = {
  mappings: {
    properties: {
      book_id: { type: 'integer' },
      title: { type: 'text' },
      author: { type: 'text' },
      my_rating: { type: 'text' },
      number_of_pages: { type: 'integer' },
      date_read: { type: 'text' },
      my_review: { type: 'text' },
      isbn: { type: 'text' },
      isbn_13: { type: 'text' }
    }
  }
}

/** PUBLIC */
export async function migrateDynamo() {
  try {
    await remap()
    const books = await getAllBooks()
    const bulkString = buildBulkString(books)
    await es.bulk({ index: 'books', body: bulkString })
  } catch (e) {
    console.log('ERR:', e.message)
  }
}

/** UTILS */
async function remap() {
  await es.indices.delete({ index: 'books' })
  await es.indices.create({ index: 'books', body: BookMapping })
}

function buildBulkString(books: Book[]) {
  let string = '{ "index": {} }\n'
  books.forEach(book => {
    const { id, ...bookWithoutId } = book
    string += `${JSON.stringify(bookWithoutId)}\n{ "index": {} }\n`
  })

  return string
}

async function main() {
  try {
    await migrateDynamo()
  } catch (e) {
    console.log(e)
  }
}

main()
