import React, { useState, useEffect } from 'react'
import ReactSidebar from 'react-sidebar'

import {
  Book,
  Stats as StatsType,
  FilterOptions,
  BookDataService,
  Stats
} from '../types'
import { BookList } from '../BookList'
import { Sidebar, defaultFilter } from '../Sidebar'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'

import { DOMInfo } from './dom-handlers'
import { AppContainer, BodyContainer } from './styles'
import DataService from '../../data/data-service'

const dataService: BookDataService = new DataService() as BookDataService

export const App = ({ scrollToTop, hasMatches }: DOMInfo) => {
  const [books, setBooks] = useState<Book[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [sidebarOpen, setSidebar] = useState(false)

  const filterBooks = (filterOptions: FilterOptions) => {
    const { books, stats } = dataService.filter(filterOptions)
    setBooks(books)
    setStats(stats)
    scrollToTop()
  }

  useEffect(() => {
    filterBooks(defaultFilter())
  }, [])

  const toggleSidebar = () => setSidebar(!sidebarOpen)
  const onSetSidebarOpen = (sidebarOpen: boolean) => setSidebar(sidebarOpen)

  return (
    <AppContainer>
      <ReactSidebar
        sidebar={
          <Sidebar
            onFilter={filterBooks}
            stats={stats}
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
          <BookList books={books} />
          <ScrollToTop />
        </BodyContainer>
      </ReactSidebar>
    </AppContainer>
  )
}
