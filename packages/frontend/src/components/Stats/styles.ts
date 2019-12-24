import styled from '@emotion/styled'
import { secondary } from '../../design/colors'

export const StatsContainer = styled('div')`
  line-height: 1.3;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  margin-left: -0.3rem;
`

export const StatNumber = styled('span')`
  color: ${secondary.secondary3};
  margin-right: 0.15rem;
`

export const Stat = styled('div')`
  padding: 0.3rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.2rem;
  }
`
