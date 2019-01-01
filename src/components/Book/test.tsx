import React from 'react'
import { render } from 'react-testing-library'
import { format } from 'date-fns'

import { generateBook } from '../../../test-utils/data-factory'
import BookComponent from './Book'
import ratingGenerator from '../Rating/ratingGenerator'
import { Book } from '../types'

let book: Book

describe('Book', () => {
    beforeAll(async () => {
        book = await generateBook()
    })

    it('renders a book', () => {
        const { getByText } = render(
            <BookComponent
                book={book}
                reviewShown={false}
                onSelect={() => null}
            />
        )

        getByText(book.Title)
        getByText(book.Author)
        getByText(format(book['Date Read'], 'M/DD/YYYY'))
        getByText(ratingGenerator(book['My Rating']))
    })

    it('toggles the review button text', () => {
        const reviewHidden = render(
            <BookComponent
                book={book}
                reviewShown={false}
                onSelect={() => null}
            />
        )

        reviewHidden.getByText('Show Review')

        reviewHidden.rerender(
            <BookComponent
                book={book}
                reviewShown={true}
                onSelect={() => null}
            />
        )
        reviewHidden.getByText('Hide Review')
    })
})
