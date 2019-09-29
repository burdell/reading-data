import React from 'react'

import { Button } from '../Elements'

import { Header as HeaderStyles, HeaderText } from './styles'

interface Props {
  toggleSidebar(): void
  showToggle: boolean
}

export function Header({ toggleSidebar, showToggle }: Props) {
  return (
    <HeaderStyles>
      <HeaderText>What Did Nathan Read?</HeaderText>
      {showToggle && <Button onClick={toggleSidebar}>Filter</Button>}
    </HeaderStyles>
  )
}
