import styled from '@emotion/styled'

import { queries } from '../../shared/breakpoints'
import { headerHeight } from '../Header'

export const BookList = styled('div')`
  background-color: #fff;
  padding: 0 1rem;
  display: grid;
  grid-gap: 0.5rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  /* for scrolling to top */
  padding-top: ${headerHeight};
  margin-top: -${headerHeight};

  ${queries.medium`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${queries.small`
    grid-template-columns: 1fr;
  `}
`
