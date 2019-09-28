import React from 'react'
import { Menu } from 'antd'
import 'antd/lib/menu/style/css'
import { X } from 'react-feather'

import { FilterOptions, Stats } from '../../types'
import { Button } from '../Elements'

import { SidebarStyles, CloseAction } from './styles'
import { Filter, defaultFilter } from './Filter'

interface Props {
  open: boolean
  onFilter(filterOptions: FilterOptions): void
  toggleSidebar(): void
  stats: Stats | null
}

export const Sidebar = ({ onFilter, stats, toggleSidebar }: Props) => {
  return (
    <div data-testid="sidebar">
      <CloseAction onClick={toggleSidebar}>
        <Button>
          <X size={14} />
        </Button>
      </CloseAction>
      <SidebarStyles>
        <Menu mode="vertical">
          <Filter
            defaultFilters={defaultFilter()}
            onFilter={onFilter}
            stats={stats}
          />
        </Menu>
      </SidebarStyles>
    </div>
  )
}
