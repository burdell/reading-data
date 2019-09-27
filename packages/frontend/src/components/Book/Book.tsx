import React from 'react'
import { format } from 'date-fns'

import { Book as BookType } from '../../types'
import { Rating } from '../Rating'

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
}

export const Book = ({ book }: BookProps) => {
  return (
    <BookStyles>
      <BookDisplay>
        <Rating rating={book.my_rating} />
        <CoverImage src={`http://images.amazon.com/images/P/${book.isbn}`} />
        <BookDetails>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
        </BookDetails>
        <ReadDate>{format(new Date(book.date_read), 'M/dd/yyyy')}</ReadDate>
      </BookDisplay>
    </BookStyles>
  )
}
