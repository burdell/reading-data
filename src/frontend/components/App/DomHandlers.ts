import { useState, useEffect } from 'react'

import { breakpoints } from '../../shared/breakpoints'
import scroll from '../ScrollToTop/scroll'

const mql = window.matchMedia(`(min-width: ${breakpoints.small}rem)`)

export interface DOMInfo {
  hasMatches: boolean
  scrollToTop(): void
}

export function useDomHandlers(): DOMInfo {
  const [hasMatches, setMatches] = useState(mql.matches)
  const mediaQueryChanged = () => setMatches(mql.matches)
  useEffect(() => {
    mql.addListener(mediaQueryChanged)

    return () => {
      mql.removeListener(mediaQueryChanged)
    }
  }, [])

  return { hasMatches, scrollToTop: scroll }
}
