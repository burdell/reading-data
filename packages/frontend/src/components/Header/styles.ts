import styled from '@emotion/styled'

import { queries } from '../../shared/breakpoints'
import { primary, white } from '../../design/colors'
import { serif } from '../../design/fonts'

export const headerHeight = '4rem'

export const Header = styled('div')`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${headerHeight};
  background-color: ${white.white9};
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 1rem;
  z-index: 1;
  font-family: ${serif};
  color: ${primary.primary3};

  box-shadow: 0px 0px 2px 0px ${primary.primary8};

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
