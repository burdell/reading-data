import { BookConversion, Book } from '../../frontend/types'
// import { ReadingData } from '../../frontend/data/data'

type BookWithoutId = Omit<Book, 'id'>

const ReadingData = []
export function getBooks() {
  const books: BookWithoutId[] = []

  ReadingData.map(rawBook => {
    const book = convertToNewType(rawBook)
    if (book) books.push(book)
  })

  console.log(books.length)
  return books
}

function convertToNewType(
  rawBook: Partial<BookConversion>
): BookWithoutId | undefined {
  const book = validateData(rawBook)
  if (!book) return

  return {
    author: book.Author,
    book_id: book['Book Id'],
    date_read: book['Date Read'],
    isbn: book.ISBN,
    isbn_13: book.ISBN13,
    my_rating: book['My Rating'],
    my_review: book['My Review'],
    number_of_pages: book['Number of Pages'],
    title: book.Title
  }
}

function validateData(
  book: Partial<BookConversion>
): BookConversion | undefined {
  // const requiredFields = [
  //   "title",
  // ];
  // const fields = Object.keys(book)
  // const hasAllFields = fields.every(field => !!(book as any)[field])

  // if (!hasAllFields) {
  //   return
  // }

  return book as BookConversion
}
