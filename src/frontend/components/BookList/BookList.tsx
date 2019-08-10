import React, { useState } from 'react'

import { Book as BookType } from '../types'
import { Book } from '../Book'
import { NoBooks } from './NoBooks'

import { Loader } from '../Loader'

import { BookList as BookListStyles, Book as BooklistBook } from './styles'

interface Props {
  books: BookType[]
  loading: boolean
}

export const BookList = ({ books, loading }: Props) => {
  const [selectedBookId, setSelectedBook] = useState<number | null>(null)

  const isBookSelected = (book: BookType) =>
    !!(selectedBookId && selectedBookId === book['Book Id'])

  if (loading) return <Loader />

  return books && books.length ? (
    <BookListStyles>
      {books.map((book, i) => (
        <BooklistBook key={i} data-testid={book['Book Id']}>
          <Book
            book={book}
            onSelect={bookId =>
              setSelectedBook(() => {
                if (selectedBookId === bookId) return null
                return bookId
              })
            }
            reviewShown={isBookSelected(book)}
          />
        </BooklistBook>
      ))}
    </BookListStyles>
  ) : (
    <NoBooks />
  )
}
