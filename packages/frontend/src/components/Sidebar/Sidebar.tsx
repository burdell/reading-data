import React from 'react'
import { X } from 'react-feather'

import { FilterOptions, Stats } from '../../types'
import { MiniButton } from '../Elements'

import { SidebarStyles, CloseAction, SidebarContainer } from './styles'
import { Filter, defaultFilter } from './Filter'

interface Props {
  open: boolean
  onFilter(filterOptions: FilterOptions): void
  toggleSidebar(): void
  stats: Stats | null
}

export const Sidebar = ({ onFilter, stats, open, toggleSidebar }: Props) => {
  return (
    <SidebarContainer showSidebar={open} data-testid="sidebar">
      <CloseAction>
        <MiniButton onClick={toggleSidebar}>
          <X size={14} />
        </MiniButton>
      </CloseAction>
      <SidebarStyles>
        <Filter
          defaultFilters={defaultFilter()}
          onFilter={onFilter}
          stats={stats}
        />
      </SidebarStyles>
    </SidebarContainer>
  )
}
