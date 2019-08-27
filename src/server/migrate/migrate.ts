import { writeFileSync } from 'fs'
import { join } from 'path'

import { FullLibrary } from './full_library'
import { ReReads } from './rereads'

import { getBooks } from './convertBooks'
import { addToDb } from './db'

function main() {
  const books = getBooks(ReReads)
  // writeFileSync(join(__dirname, './migration_test.json'), JSON.stringify(books))
  addToDb(books)
}

main()
