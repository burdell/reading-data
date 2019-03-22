import React from 'react'
import { Menu } from 'antd'
import 'antd/lib/menu/style/css'

import { Book, BookDataService, FilterOptions, Stats } from '../types'
import { Sidebar, CloseAction } from './styles'
import Filter from './Filter'
import DataService from '../../data/data-service'

interface Props {
  open: boolean
  onChange(books: Book[], stats: Stats, filterOptions: FilterOptions): void
  toggleSidebar(): void
}

interface State {
  open: boolean
  stats: Stats | null
}

export default class SidebarComponent extends React.Component<
  Readonly<Props>,
  Readonly<State>
> {
  private dataService: BookDataService
  private defaultFilter: FilterOptions

  constructor(props: Props) {
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

  componentWillReceiveProps(newProps: Props, oldProps: Props) {
    if (oldProps.open !== newProps.open) {
      this.setState({ open: newProps.open })
    }
  }

  componentDidMount() {
    this.filter(this.defaultFilter)
  }

  render() {
    return (
      <div data-testid="sidebar">
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
