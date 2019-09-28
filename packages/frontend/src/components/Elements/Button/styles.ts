import styled from 'react-emotion'

import { primary, white } from '../../../design/colors'
import { sanSerif } from '../../../design/fonts'

export const StyledButton = styled('button')`
  outline: none;
  background-color: ${primary.primary3};
  color: ${white.white3};
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in;
  font-family: ${sanSerif};
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: background-color 0.3s ease-in-out;
  border: none;
  display: flex;

  &:hover {
    background-color: ${primary.primary4};
  }

  &:focus {
    border: 1px solid ${primary.primary6};
  }
`

export const ButtonIcon = styled('div')`
  margin-right: 0.2rem;
`
