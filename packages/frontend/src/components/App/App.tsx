import React, { useState } from 'react'

import { BookList } from '../BookList'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { ScrollToTop } from '../ScrollToTop'
import { useData } from '../AppData'

import { useDomHandlers } from './DomHandlers'
import { AppContainer, BodyContainer } from './styles'

export function App() {
  const [sidebarOpen, setSidebar] = useState(false)
  const { hasMatches } = useDomHandlers()
  const { loading, data, updateFilter } = useData()
  const { books, stats } = data
  const toggleSidebar = () => setSidebar(!sidebarOpen)

  return (
    <AppContainer>
      <Header toggleSidebar={toggleSidebar} showToggle={!hasMatches} />
      <BodyContainer>
        <Sidebar
          onFilter={updateFilter}
          stats={stats}
          open={hasMatches || sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <BookList books={books} loading={loading} />
        <ScrollToTop />
      </BodyContainer>
    </AppContainer>
  )
}
