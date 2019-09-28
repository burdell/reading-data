import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray, primary, secondary } from '../../design/colors'
import { sanSerif, serif } from '../../design/fonts'

export const BookStyles = styled('div')``

export const BookDetails = styled('div')`
  font-family: ${serif};
  margin: 0.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;

  ${queries.small`
    text-align: left;
    padding-left: 0.3rem;
    margin: 0;
  `}
`
export const Title = styled('div')`
  font-size: 1.2rem;
  color: ${primary.primary3};

  ${queries.small`
    font-size: 1.5rem;
  `}
`

export const Author = styled('div')`
  font-size: 0.9rem;
  color: ${gray.gray4};
`

export const ReadDate = styled('div')`
  font-size: 0.6rem;
  color: ${gray.gray4};
  font-family: ${sanSerif};
`

export const CoverImage = styled('img')`
  width: 8rem;
  box-shadow: 0px 0px 5px 0px ${gray.gray3};
  max-height: 12rem;
  margin: 0.2rem 0;
  transition: box-shadow 0.3s ease-in-out;

  ${queries.small`
    width: 7rem;
  `}

  ~ .read-date {
    overflow-y: hidden;
    max-height: 0;
    transition: max-height 0.6s ease-in-out;
    padding-top: 0.3rem;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${secondary.secondary4};

    ~ .read-date {
      max-height: 100px;
    }
  }
`
export const BookDisplay = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0.8rem 0;
  text-align: center;

  ${queries.small`
    grid-template-columns: 1fr 2fr;
    margin: 0;
    margin-top: .5rem;
  `}
`
