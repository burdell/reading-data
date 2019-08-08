import { getBooks } from './convertBooks'
import { addToDb } from './db'

function main() {
  const books = getBooks()
  addToDb(books)
}

main()
