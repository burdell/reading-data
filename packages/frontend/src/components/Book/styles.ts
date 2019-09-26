import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray, primary, tertiary } from '../../design/colors'
import { sanSerif, serif } from '../../design/fonts'

export const BookStyles = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0.8rem 0;
`

export const BookDetails = styled('div')`
  font-family: ${serif};
  margin: 0.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`
export const Title = styled('div')`
  font-size: 1.2rem;
  color: ${primary.primary2};
`

export const Author = styled('div')`
  font-size: 0.9rem;
  color: ${gray.gray4};
`

export const ReadDate = styled('div')`
  font-size: 0.6rem;
  color: ${gray.gray3};
  font-family: ${sanSerif};
  height: 0;
  opacity: 0;
`
export const CoverImage = styled('img')`
  width: 8rem;
  box-shadow: 0px 0px 5px 0px ${gray.gray3};
  max-height: 12rem;
  margin: 0.2rem 0;
  transition: box-shadow 0.4s ease-in;

  + .read-date {
    transition: height 0.4s ease-in, opacity 0.4s ease-in;
  }

  &:hover {
    box-shadow: 0px 0px 7px 0px ${primary.primary5};

    + .read-date {
      height: 10px;
      opacity: 1;
      transition: height 0.3s ease-in, opacity 0.3s ease-in;
    }
  }
`
export const BookDisplay = styled('div')`
  text-align: center;
`
