import React from 'react'

interface ReviewProps {
  isShown: boolean
  review: string
}

import { BookReview } from './styles'

export default ({ isShown, review }: ReviewProps): JSX.Element => {
  return (
    <BookReview>
      <div className={`book-review ${isShown ? 'shown' : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: review }} />
      </div>
    </BookReview>
  )
}
