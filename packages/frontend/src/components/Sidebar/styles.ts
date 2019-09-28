import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'

export const SidebarStyles = styled('div')`
  background-color: #fff;
`

export const SidebarSection = styled('div')`
  line-height: 1.5;
  font-size: 1.2rem;
  font-weight: 100;
  width: 10.5rem;
  padding-left: 0.5rem;
`

export const SidebarHeader = styled('div')`
  font-size: 1.5rem;
  color: rgb(87, 87, 87);
`

export const SidebarContent = styled('div')`
  padding-left: 0.5rem;
`

export const SidebarType = styled('div')`
  color: rgb(136, 136, 136);
`

export const CloseAction = styled('div')`
  position: absolute;
  right: 10px;
  top: 7px;
  z-index: 10000;
  display: none;
  cursor: pointer;

  ${queries.small`
        display: inline-block;
    `}
`
