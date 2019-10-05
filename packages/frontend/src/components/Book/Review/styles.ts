import styled from '@emotion/styled'
import { queries } from '../../../shared/breakpoints'

export const BookReview = styled('div')`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgb(90, 90, 90);
  line-height: 1.5;

  ${queries.medium`
        font-size: .7rem;
    `}

  ${queries.small`
        font-size: .8rem;
    `}

    .book-review {
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 0.2s ease-in-out;
  }

  .book-review.shown {
    max-height: 50rem;
    transition: max-height 0.3s ease-in-out;
  }
`
