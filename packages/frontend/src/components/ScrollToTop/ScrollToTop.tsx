import React from 'react'
import { ArrowUp } from 'react-feather'

import { Button } from '../Elements'

import { ScrollToTopStyles } from './styles'
import { scroll } from './scroll'

const _window = window as any
_window.__forceSmoothScrollPolyfill__ = true
require('smoothscroll-polyfill').polyfill()

export function ScrollToTop() {
  return (
    <ScrollToTopStyles onClick={scroll}>
      <Button>
        <ArrowUp size={20} />
      </Button>
    </ScrollToTopStyles>
  )
}
