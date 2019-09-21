import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { sanSerif } from '../../design/fonts'

export const AppContainer = styled('div')`
  font-family: ${sanSerif};
  display: relative;
`

export const BodyContainer = styled('div')`
  display: flex;

  ${queries.small`
        margin-top: 3rem;
    `}
`
