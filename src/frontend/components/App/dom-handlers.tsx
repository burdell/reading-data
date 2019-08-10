import React, { useState, useEffect } from 'react'

import { breakpoints } from '../../shared/breakpoints'
import scroll from '../ScrollToTop/scroll'

import { App as MainApp } from './App'

const mql = window.matchMedia(`(min-width: ${breakpoints.small}rem)`)

export interface DOMInfo {
  hasMatches: boolean
  scrollToTop(): void
}

export const App = () => {
  const [hasMatches, setMatches] = useState(mql.matches)

  const mediaQueryChanged = () => setMatches(mql.matches)
  useEffect(() => {
    mql.addListener(mediaQueryChanged)

    return () => {
      mql.removeListener(mediaQueryChanged)
    }
  }, [])

  return <MainApp hasMatches={hasMatches} scrollToTop={scroll} />
}
