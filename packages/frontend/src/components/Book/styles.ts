import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray, primary } from '../../design/colors'
import { sanSerif } from '../../design/fonts'

export const BookStyles = styled('div')``

export const BookDetails = styled('div')`
  font-family: 'Crimson Pro';
  margin: 0.3rem 0;
`
export const Title = styled('div')`
  font-size: 1rem;
  color: ${primary.primary2};
`

export const Author = styled('div')`
  font-size: 0.9rem;
  color: ${gray.gray3};
`

export const ReadDate = styled('div')`
  font-size: 0.6rem;
  color: ${gray.gray3};
  font-family: ${sanSerif};
`
