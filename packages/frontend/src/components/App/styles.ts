import styled from 'react-emotion'

import { sanSerif } from '../../design/fonts'
import { headerHeight } from '../Header'
import { queries } from '../../shared/breakpoints'

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
    grid-template-columns: 1fr;
  `}
`
