import React from 'react'
import { ArrowUp } from 'react-feather'

import { Button } from '../Elements'

import { ScrollToTopStyles } from './styles'
import { scroll } from './scroll'

require('smoothscroll-polyfill').polyfill()

export function ScrollToTop() {
  return (
    <ScrollToTopStyles>
      <Button onClick={scroll}>
        <ArrowUp size={20} />
      </Button>
    </ScrollToTopStyles>
  )
}
