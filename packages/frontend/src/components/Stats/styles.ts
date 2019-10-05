import styled from '@emotion/styled'
import { secondary } from '../../design/colors'

export const StatsContainer = styled('div')`
  line-height: 1.3;
  font-size: 0.9rem;
  margin-top: 0.3em;
`

export const StatNumber = styled('span')`
  color: ${secondary.secondary3};
`

export const Stat = styled('div')`
  padding: 0.3rem;

  svg {
    margin-right: 0.2rem;
  }
`
