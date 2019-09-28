import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray } from '../../design/colors'
import { serif } from '../../design/fonts'

export const Header = styled('div')`
  display: none;
  height: 3rem;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 0.8rem;
  z-index: 1;
  font-family: ${serif};
  color: ${gray.gray3};

  box-shadow: 0px 2px 5px 0px ${gray.gray8};

  ${queries.small`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`

export const HeaderText = styled('div')`
  font-weight: 800;
  font-size: 1.5rem;
`
