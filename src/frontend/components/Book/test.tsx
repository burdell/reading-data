import React from 'react'
import { render } from 'react-testing-library'
import { format } from 'date-fns'

import { generateBook } from '../../test-utils/data-factory'
import { Book } from './Book'
import ratingGenerator from '../Rating/ratingGenerator'
import { Book as BookType } from '../../types'

let book: BookType

describe('Book', () => {
  beforeAll(async () => {
    book = await generateBook()
  })

  it('renders a book', () => {
    const { getByText } = render(
      <Book book={book} reviewShown={false} onSelect={() => null} />
    )

    getByText(book.Title)
    getByText(book.Author)
    getByText(format(book['Date Read'], 'M/DD/YYYY'))
    getByText(ratingGenerator(book['My Rating']))
  })

  it('toggles the review button text', () => {
    const reviewHidden = render(
      <Book book={book} reviewShown={false} onSelect={() => null} />
    )

    reviewHidden.getByText('Show Review')

    reviewHidden.rerender(
      <Book book={book} reviewShown={true} onSelect={() => null} />
    )
    reviewHidden.getByText('Hide Review')
  })
})
