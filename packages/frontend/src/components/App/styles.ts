import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { sanSerif } from '../../design/fonts'
import { headerHeight } from '../Header'

export const AppContainer = styled('div')`
  font-family: ${sanSerif};
  display: relative;
`

export const BodyContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 9fr;
  margin-top: ${headerHeight};
  min-height: 100vh;

  ${queries.small`
        margin-top: 3rem;
    `}
`
