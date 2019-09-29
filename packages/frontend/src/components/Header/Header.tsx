import React from 'react'

import { Button } from '../Elements'

import { Header as HeaderStyles, HeaderText } from './styles'

interface Props {
  toggleSidebar(): void
}

export function Header({ toggleSidebar }: Props) {
  return (
    <HeaderStyles>
      <HeaderText className="header-text">What Did Nathan Read?</HeaderText>
      {/* <Button onClick={toggleSidebar}>Show Filter</Button> */}
    </HeaderStyles>
  )
}
