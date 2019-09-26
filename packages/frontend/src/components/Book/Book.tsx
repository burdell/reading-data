import React from 'react'
import { format } from 'date-fns'

import { Book as BookType } from '../../types'
import { Button } from '../Elements'
import { Rating } from '../Rating'

import { Review } from './Review'

import {
  BookStyles,
  BookDetails,
  Title,
  Author,
  ReadDate,
  CoverImage,
  BookDisplay
} from './styles'

interface BookProps {
  book: BookType
  reviewShown: boolean
  onSelect(bookId: number): void
}

export const Book = ({ book, reviewShown, onSelect }: BookProps) => {
  return (
    <BookStyles>
      <BookDisplay>
        {/* <ReadDate>{format(new Date(book.date_read), 'M/dd/yyyy')}</ReadDate> */}
        <CoverImage src={`http://images.amazon.com/images/P/${book.isbn}`} />
        <Rating rating={book.my_rating} />
        <BookDetails>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
        </BookDetails>
      </BookDisplay>
    </BookStyles>
  )
}
