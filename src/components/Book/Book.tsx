import React from 'react'
import { format } from 'date-fns'

import { Book as IBook } from '../types'
import { Rating } from '../Rating'
import Review from './Review'

import {
  ActionsContainer,
  Book,
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
  book: IBook
  reviewShown: boolean
  onSelect(bookId: number): void
}

export default ({ book, reviewShown, onSelect }: BookProps) => {
  return (
    <Book>
      <CoverContainer>
        <Cover>
          <CoverImage src={`http://images.amazon.com/images/P/${book.ISBN}`} />
        </Cover>
        <BookDetails>
          <BookInfo>
            <ReadDate>{format(book['Date Read'], 'M/DD/YYYY')}</ReadDate>
            <BookTitle>{book.Title}</BookTitle>
            <BookAuthor>{book.Author}</BookAuthor>
          </BookInfo>
          <Rating rating={book['My Rating']} />
        </BookDetails>
      </CoverContainer>
      <ActionsContainer>
        {book['My Review'] && (
          <ReviewToggle
            onClick={() => onSelect(book['Book Id'])}
            className="review-toggle"
          >
            {reviewShown ? 'Hide' : 'Show'} Review
          </ReviewToggle>
        )}
      </ActionsContainer>
      <Review review={book['My Review']} isShown={reviewShown} />
    </Book>
  )
}
