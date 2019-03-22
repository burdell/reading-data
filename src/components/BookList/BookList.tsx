import React, { useState } from 'react'

import { Book as BookType } from '../types'
import { Book } from '../Book'
import { NoBooks } from './NoBooks'

import { BookList as BookListStyles, Book as BooklistBook } from './styles'

interface Props {
  books: BookType[]
}

export const BookList = ({ books }: Props) => {
  const [selectedBookId, setSelectedBook] = useState<number>()

  const isBookSelected = (book: BookType) =>
    !!(selectedBookId && selectedBookId === book['Book Id'])

  return books && books.length ? (
    <BookListStyles>
      {books.map((book, i) => (
        <BooklistBook key={i} data-testid={book['Book Id']}>
          <Book
            book={book}
            onSelect={bookId => setSelectedBook(bookId)}
            reviewShown={isBookSelected(book)}
          />
        </BooklistBook>
      ))}
    </BookListStyles>
  ) : (
    <NoBooks />
  )
}
