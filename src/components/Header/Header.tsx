import React from 'react'

import { Header, HeaderText, FilterToggle } from './styles'

interface Props {
    toggleSidebar(): void
}

export default ({ toggleSidebar }: Props) => {
    return (
        <Header>
            <HeaderText className="header-text">What Nathan Read</HeaderText>
            <FilterToggle onClick={toggleSidebar}>Show Filter</FilterToggle>
        </Header>
    )
}
