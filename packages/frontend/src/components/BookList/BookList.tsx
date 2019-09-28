import React, { useState } from 'react'

import { Book as BookType } from '../../types'
import { Book } from '../Book'
import { NoBooks } from './NoBooks'

import { Loader } from '../Loader'

import { BookList as BookListContainer } from './styles'

interface Props {
  books: BookType[]
  loading: boolean
}

export const BookList = ({ books, loading }: Props) => {
  if (loading) return <Loader />

  return books && books.length ? (
    <BookListContainer>
      {books.map((book, i) => (
        <Book key={i} data-testid={book.book_id} book={book} />
      ))}
    </BookListContainer>
  ) : (
    <NoBooks />
  )
}
