import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Book as BookType } from '../../types'
import { Book } from './Book'
import { AppContainer } from '../App/styles'

function getBook(): BookType {
  return {
    author: 'George P. Burdell',
    book_id: 1234,
    date_read: '2019-03-01',
    id: '1234',
    isbn: '=0140186395',
    my_rating: 5,
    my_review: '<div>dis good</div>',
    number_of_pages: 123,
    title: 'A Very Cool Book'
  }
}

storiesOf('Book', module).add('basic book', () => (
  <AppContainer>
    <Book onSelect={() => null} book={getBook()} reviewShown={false} />
  </AppContainer>
))
