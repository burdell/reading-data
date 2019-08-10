import React from 'react'

import ratingGenerator from './ratingGenerator'
import { Rating as RatingStyles } from './styles'

interface RatingProps {
  rating: number
}

export const Rating = ({ rating }: RatingProps): JSX.Element => {
  const ratingNum = Number(rating)
  return (
    <RatingStyles>
      <div className="rating-display">{ratingGenerator(ratingNum)}</div>
    </RatingStyles>
  )
}
