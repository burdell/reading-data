import React, { useState } from 'react'
import ReactSidebar from 'react-sidebar'

import { BookList } from '../BookList'
import { Sidebar } from '../Sidebar'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'
import { useData } from '../AppData'

import { useDomHandlers } from './DomHandlers'
import { AppContainer, BodyContainer } from './styles'

export function App() {
  const [sidebarOpen, setSidebar] = useState(false)
  const { hasMatches } = useDomHandlers()
  const { loading, books, stats } = useData()

  const toggleSidebar = () => setSidebar(!sidebarOpen)
  const onSetSidebarOpen = (sidebarOpen: boolean) => setSidebar(sidebarOpen)

  return (
    <AppContainer>
      <ReactSidebar
        sidebar={
          <Sidebar
            onFilter={() => null}
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
