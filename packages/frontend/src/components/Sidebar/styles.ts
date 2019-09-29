import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'
import { gray } from '../../design/colors'
import { inherits } from 'util'

interface SidebarProps {
  showSidebar: boolean
}

export const SidebarContainer = styled('div')`
  position: relative;
  min-width: 185px;
  background-color: ${gray.gray9};
  height: 100%;
  display: ${(props: SidebarProps) => (props.showSidebar ? 'flex' : 'none')};
  justify-content: center;

  ${queries.small`
    position: fixed;
  `}
`

export const SidebarStyles = styled('div')`
  position: fixed;
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
  top: 10px;
  z-index: 10000;
  display: none;
  cursor: pointer;

  ${queries.small`
      display: inline-block;
  `}
`
