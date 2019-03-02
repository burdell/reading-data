import React, { Component } from 'react'
import ReactSidebar from 'react-sidebar'

import { AppState, Book, Stats as IStats, FilterOptions } from '../types'
import BookList from '../BookList'
import Sidebar from '../Sidebar'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'

import { DOMInfo } from './DomHandlers'
import { AppContainer, BodyContainer } from './styles'

export class App extends Component<Readonly<DOMInfo>, Readonly<AppState>> {
  public readonly state: AppState = {
    books: [],
    stats: null,
    filterOptions: null,
    sidebarOpen: false
  }

  public render(): JSX.Element {
    return (
      <AppContainer>
        <ReactSidebar
          sidebar={
            <Sidebar
              onChange={this.receiveBooks}
              open={this.state.sidebarOpen}
              toggleSidebar={this.toggleSidebar}
            />
          }
          docked={this.props.hasMatches}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Header toggleSidebar={this.toggleSidebar} />
          <BodyContainer id="body-container">
            <BookList books={this.state.books} />
            <ScrollToTop />
          </BodyContainer>
        </ReactSidebar>
      </AppContainer>
    )
  }

  public receiveBooks = (
    books: Book[],
    stats: IStats,
    filterOptions: FilterOptions
  ) => {
    this.props.scrollToTop()
    this.setState({ books, stats, filterOptions })
  }

  private toggleSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen })

  private onSetSidebarOpen = (sidebarOpen: boolean) =>
    this.setState({ sidebarOpen })
}
