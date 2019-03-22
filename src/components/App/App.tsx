import React, { useState } from 'react'
import ReactSidebar from 'react-sidebar'

import { Book, Stats as StatsType, FilterOptions } from '../types'
import { BookList } from '../BookList'
import { Sidebar } from '../Sidebar'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'

import { DOMInfo } from './dom-handlers'
import { AppContainer, BodyContainer } from './styles'

export const App = ({ scrollToTop, hasMatches }: DOMInfo) => {
  const [filterInfo, setFilterInfo] = useState<{
    books: Book[]
    stats: StatsType | null
    filterOptions: FilterOptions | null
  }>({ books: [], filterOptions: null, stats: null })
  const [sidebarOpen, setSidebar] = useState(false)

  const receiveBooks = (
    books: Book[],
    stats: StatsType,
    filterOptions: FilterOptions
  ) => {
    scrollToTop()
    setFilterInfo({ books, stats, filterOptions })
  }

  const toggleSidebar = () => setSidebar(!sidebarOpen)
  const onSetSidebarOpen = (sidebarOpen: boolean) => setSidebar(sidebarOpen)

  return (
    <AppContainer>
      <ReactSidebar
        sidebar={
          <Sidebar
            onChange={receiveBooks}
            open={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        }
        docked={hasMatches}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
      >
        <Header toggleSidebar={toggleSidebar} />
        <BodyContainer id="body-container">
          <BookList books={filterInfo.books} />
          <ScrollToTop />
        </BodyContainer>
      </ReactSidebar>
    </AppContainer>
  )
}
