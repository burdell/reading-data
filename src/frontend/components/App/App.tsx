import React, { useState, useEffect } from 'react'
import ReactSidebar from 'react-sidebar'

import { Stats, FilterOptions } from '../types'
import { BookList } from '../BookList'
import { Sidebar, defaultFilter } from '../Sidebar'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'

import { useDomHandlers } from './DomHandlers'
import { AppContainer, BodyContainer } from './styles'
import { NewBook } from '../../data/types'

interface Props {
  books: NewBook[]
  loading: boolean
  filterBooks(options: FilterOptions): void
}

export function App({ books, filterBooks, loading }: Props) {
  const [stats, setStats] = useState<Stats | null>(null)
  const [sidebarOpen, setSidebar] = useState(false)
  const { hasMatches } = useDomHandlers()

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
          <BookList loading={loading} books={books} />
          <ScrollToTop />
        </BodyContainer>
      </ReactSidebar>
    </AppContainer>
  )
}
