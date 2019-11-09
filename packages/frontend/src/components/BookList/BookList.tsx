import React from 'react'

import { Book as BookType } from '../../types'
import { Book } from '../Book'
import { Loader } from '../Loader'

import { NoBooks } from './NoBooks'
import { BookList as BookListContainer } from './styles'

interface Props {
  books: BookType[]
  loading: boolean
}

export const BookList = ({ books, loading }: Props) => {
  if (loading) return <Loader />

  return books && books.length ? (
    <BookListContainer id="book-list-container">
      {books.map((book, i) => (
        <Book key={i} data-testid={book.book_id} book={book} />
      ))}
    </BookListContainer>
  ) : (
    <NoBooks />
  )
}
