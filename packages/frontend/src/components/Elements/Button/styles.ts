import styled from 'react-emotion'

import { primary, white } from '../../../design/colors'
import { sanSerif } from '../../../design/fonts'

export const ButtonBase = `
  outline: none;
  background-color: ${primary.primary3};
  color: ${white.white3};
  border-radius: 0.25rem;
  transition: all 0.1s ease-in;
  font-family: ${sanSerif};
  text-transform: uppercase;
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

export const StyledButton = styled('button')`
  ${ButtonBase}
  padding: 0.4rem;
  font-size: 0.8rem;
`

export const ButtonIcon = styled('div')`
  margin-right: 0.2rem;
`

export const MiniButton = styled('button')`
  ${ButtonBase}
  padding: 0.2rem;
  font-size: 0.4rem;
`
