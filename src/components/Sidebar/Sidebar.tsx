import React from 'react'
import { Menu } from 'antd'
import 'antd/lib/menu/style/css'

import { Book, BookDataService, FilterOptions, Stats } from '../types'
import { Sidebar, CloseAction } from './styles'
import Filter from './Filter'
import DataService from '../../data/data-service'

interface SidebarProps {
  open: boolean
  onChange(books: Book[], stats: Stats, filterOptions: FilterOptions)
  toggleSidebar(): void
}

interface SidebarState {
  open: boolean
  stats: Stats
}

export default class SidebarComponent extends React.Component<
  SidebarProps,
  SidebarState
> {
  private dataService: BookDataService
  private defaultFilter: FilterOptions

  constructor(props: SidebarProps) {
    super(props)

    this.state = {
      open: props.open,
      stats: null
    }

    this.dataService = new DataService() as BookDataService
    this.defaultFilter = {
      year: [2018],
      read: true,
      month: [],
      rating: []
    }

    this.filter = this.filter.bind(this)
  }

  componentWillReceiveProps(newProps: SidebarProps, oldProps: SidebarProps) {
    if (oldProps.open !== newProps.open) {
      this.setState({ open: newProps.open })
    }
  }

  componentDidMount() {
    this.filter(this.defaultFilter)
  }

  render() {
    return (
      <div>
        <CloseAction onClick={this.props.toggleSidebar}>X</CloseAction>
        <Sidebar>
          <Menu mode="vertical">
            <Filter
              defaultFilters={this.defaultFilter}
              onFilter={this.filter}
              stats={this.state.stats}
            />
          </Menu>
        </Sidebar>
      </div>
    )
  }

  filter(filterOptions: FilterOptions) {
    const { books, stats } = this.dataService.filter(filterOptions)
    this.setState({ stats })
    this.props.onChange(books, stats, filterOptions)
  }
}
