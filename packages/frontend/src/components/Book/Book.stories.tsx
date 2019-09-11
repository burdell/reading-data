import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Book } from './Book'

import { Book as BookType } from '../../types'

function getBook(): BookType {
  return {
    author: 'George P. Burdell',
    book_id: 1234,
    date_read: '2019-03-01',
    id: '1234',
    isbn: '=9780140186390',
    my_rating: 5,
    my_review: '<div>dis good</div>',
    number_of_pages: 123,
    title: 'A Very Cool Book'
  }
}

storiesOf('Button', module).add('basic book', () => (
  <Book onSelect={() => null} book={getBook()} reviewShown={false} />
))
