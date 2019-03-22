import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import { BookList } from './BookList'
import { generateBookList } from '../../test-utils/data-factory'
import { Book } from '../types'

const getReviewEls = (book: Element) => ({
  reviewToggle: book.getElementsByClassName('review-toggle').item(0),
  review: book.getElementsByClassName('book-review').item(0)
})

const expectReviewHidden = (review: Element) =>
  expect(getComputedStyle(review).maxHeight).toBe('0')
const expectReviewShown = (review: Element) =>
  expect(getComputedStyle(review).maxHeight).not.toBe('0')

let books: Book[]

describe('Book', () => {
  beforeAll(async () => {
    books = await generateBookList(10)
  })

  it('renders a list of books', () => {
    const { getByText } = render(<BookList books={books} />)

    books.forEach(book => {
      getByText(book.Title)
    })
  })

  it('shows a review', () => {
    const thirdBook = books[2]

    const { getByTestId } = render(<BookList books={books} />)

    const book = getByTestId(thirdBook['Book Id'].toString())
    const { review, reviewToggle } = getReviewEls(book)

    expectReviewHidden(review!)

    fireEvent.click(reviewToggle!)
    expectReviewShown(review!)
  })

  it('only shows 1 review at a time', () => {
    const { getByTestId } = render(<BookList books={books} />)

    const firstBook = getByTestId(books[0]['Book Id'].toString())
    const secondBook = getByTestId(books[1]['Book Id'].toString())

    const firstReview = getReviewEls(firstBook)
    const secondReview = getReviewEls(secondBook)

    expectReviewHidden(firstReview.review!)
    expectReviewHidden(secondReview.review!)

    fireEvent.click(firstReview.reviewToggle!)
    fireEvent.click(secondReview.reviewToggle!)

    expectReviewHidden(firstReview.review!)
    expectReviewShown(secondReview.review!)
  })

  it('handles no books', () => {
    const { getByTestId } = render(<BookList books={[]} />)
    getByTestId('no-books')
  })
})
