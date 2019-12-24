import styled from '@emotion/styled'

import { queries } from '../../shared/breakpoints'
import { gray, primary, secondary, white } from '../../design/colors'
import { sanSerif, serif } from '../../design/fonts'

export const BookStyles = styled('div')``

export const BookDetails = styled('div')`
  font-family: ${serif};
  margin: 0.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;

  ${queries.small`
    text-align: left;
    padding-left: 1rem;
    margin: 0;
  `}
`
export const Title = styled('div')`
  font-size: 1.2rem;
  color: ${primary.primary3};
  margin-bottom: 0.2rem;

  ${queries.small`
    font-size: 1.4rem;
  `}
`

export const Author = styled('div')`
  font-size: 0.9rem;
  color: ${gray.gray3};
`

export const ReadDate = styled('div')`
  font-size: 0.6rem;
  color: ${gray.gray4};
  font-family: ${sanSerif};
`

export const CoverImage = styled('img')`
  width: 8rem;
  box-shadow: 0px 0px 4px 0px ${gray.gray4};
  min-height: 10rem;
  margin: 0.2rem 0;
  transition: box-shadow 0.3s ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    165deg,
    ${secondary.secondary8},
    ${secondary.secondary9},
    ${white.white9}
  );

  &:hover {
    box-shadow: 0px 0px 8px 0px ${secondary.secondary4};
  }

  ${queries.small`
    width: 7rem;
  `}
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
