import React from 'react'
import { render } from 'react-testing-library'

import { Rating } from './Rating'

describe('Rating', () => {
  it('correctly generates ratings', () => {
    const result = render(<Rating rating={1} />)
    result.getByText('★☆☆☆☆')

    result.rerender(<Rating rating={2} />)
    result.getByText('★★☆☆☆')

    result.rerender(<Rating rating={3} />)
    result.getByText('★★★☆☆')

    result.rerender(<Rating rating={4} />)
    result.getByText('★★★★☆')

    result.rerender(<Rating rating={5} />)
    result.getByText('★★★★★')
  })
})
