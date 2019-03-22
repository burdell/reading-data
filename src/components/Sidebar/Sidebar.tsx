import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import 'antd/lib/menu/style/css'

import { Book, BookDataService, FilterOptions, Stats } from '../types'
import { SidebarStyles, CloseAction } from './styles'
import Filter from './Filter'
import DataService from '../../data/data-service'

interface Props {
  open: boolean
  onChange(books: Book[], stats: Stats, filterOptions: FilterOptions): void
  toggleSidebar(): void
}

const defaultFilter = () => ({
  year: [2018],
  read: true,
  month: [],
  rating: []
})

const dataService: BookDataService = new DataService() as BookDataService

export const Sidebar = ({ open, onChange, toggleSidebar }: Props) => {
  const [stats, setStats] = useState<Stats | null>(null)
  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    filter(defaultFilter())
  }, [])

  const filter = (filterOptions: FilterOptions) => {
    const { books, stats } = dataService.filter(filterOptions)
    setStats(stats)
    onChange(books, stats, filterOptions)
  }

  return (
    <div data-testid="sidebar">
      <CloseAction onClick={toggleSidebar}>X</CloseAction>
      <SidebarStyles>
        <Menu mode="vertical">
          <Filter
            defaultFilters={defaultFilter()}
            onFilter={filter}
            stats={stats}
          />
        </Menu>
      </SidebarStyles>
    </div>
  )
}
