import React from 'react'
import { X } from 'react-feather'

import { FilterOptions, Stats } from '../../types'
import { Button } from '../Elements'

import { SidebarStyles, CloseAction, SidebarContainer } from './styles'
import { Filter, defaultFilter } from './Filter'

interface Props {
  open: boolean
  onFilter(filterOptions: FilterOptions): void
  toggleSidebar(): void
  stats: Stats | null
}

{
  /* <CloseAction onClick={toggleSidebar}>
<Button>
  <X size={14} />
</Button>
</CloseAction> */
}

export const Sidebar = ({ onFilter, stats, toggleSidebar }: Props) => {
  return (
    <SidebarContainer data-testid="sidebar">
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
