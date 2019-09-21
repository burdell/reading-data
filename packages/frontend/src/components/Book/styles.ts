import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'

export const BookStyles = styled('div')`
  line-height: 1;
  padding: 1rem;
`

export const CoverContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const Cover = styled('div')`
  display: inline-block;
`

export const CoverImage = styled('img')`
  width: 8rem;
  box-shadow: 0px 0px 5px 0px rgba(180, 180, 180, 1);
  max-height: 12rem;

  transition: all 0.3s ease-in-out;

  ${queries.medium`
        width: 6.5rem;
    `}

  ${queries.small`
        width: 8rem;
    `}
`

export const ReadDate = styled('div')`
  font-size: 0.5rem;
  color: rgb(165, 165, 165);
  font-style: italic;
  margin-bottom: 0.2rem;
`

export const BookDetails = styled('div')`
  padding-left: 1rem;
  line-height: 1.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${queries.medium`
        .rating-display {
            font-size: .8rem;
        }
    `}

  ${queries.small`
        .rating-display {
            font-size: 1rem;
        }
    `}
`

export const BookInfo = styled('div')`
  width: 100%;
  margin-bottom: 0.3rem;
`

export const BookAuthor = styled('span')`
  font-size: 0.7rem;
  color: rgb(160, 160, 160);

  ${queries.medium`
        font-size: .6rem;
    `}

  ${queries.small`
        font-size: .7rem;
    `}
`

export const BookTitle = styled('div')`
  font-size: 0.9rem;

  ${queries.medium`
        font-size: .8rem;
    `}

  ${queries.small`
        font-size: 1rem;
    `}
`

export const ActionsContainer = styled('div')`
  width: 6rem;
  text-align: center;
  margin-top: 0.2rem;
`

export const ReviewToggle = styled('button')`
  cursor: pointer;
  font-size: 0.6rem;
  background-color: #f2f2f2;
  padding: 0.5rem 0.5rem;
  display: inline-block;
  min-width: 8rem;

  :hover {
    color: #376bbf;
    box-shadow: 0px 0px 1px -3px rgba(0, 0, 0, 0.3);
  }

  ${queries.medium`
        min-width: 6.5rem;
    `}

  ${queries.small`
        min-width: 8rem;
    `}
`
