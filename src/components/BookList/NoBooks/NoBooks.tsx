import React from 'react'

import { NoBooks as NoBooksStyles, Image } from './styles'

export const NoBooks = () => {
  return (
    <NoBooksStyles data-testid="no-books">
      <Image />
    </NoBooksStyles>
  )
}
