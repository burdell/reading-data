import React from 'react'
import { format } from 'date-fns'

import { Book as BookType } from '../../data/types'
import { Rating } from '../Rating'
import { Review } from './Review'

import {
  ActionsContainer,
  BookStyles,
  CoverContainer,
  Cover,
  CoverImage,
  ReadDate,
  BookDetails,
  BookInfo,
  BookAuthor,
  BookTitle,
  ReviewToggle
} from './styles'

interface BookProps {
  book: BookType
  reviewShown: boolean
  onSelect(bookId: number): void
}

export const Book = ({ book, reviewShown, onSelect }: BookProps) => {
  return (
    <BookStyles>
      <CoverContainer>
        <Cover>
          <CoverImage src={`http://images.amazon.com/images/P/${book.isbn}`} />
        </Cover>
        <BookDetails>
          <BookInfo>
            <ReadDate>{format(book.date_read, 'M/DD/YYYY')}</ReadDate>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
          </BookInfo>
          <Rating rating={book.my_rating} />
        </BookDetails>
      </CoverContainer>
      <ActionsContainer>
        {book.my_review && (
          <ReviewToggle
            onClick={() => onSelect(book.book_id)}
            className="review-toggle"
          >
            {reviewShown ? 'Hide' : 'Show'} Review
          </ReviewToggle>
        )}
      </ActionsContainer>
      <Review review={book.my_review} isShown={reviewShown} />
    </BookStyles>
  )
}
