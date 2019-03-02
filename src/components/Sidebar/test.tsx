import React from 'react'
import { render } from 'react-testing-library'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the sidebar', () => {
    const { debug } = render(
      <Sidebar open={true} onChange={() => null} toggleSidebar={() => null} />
    )

    debug()
  })
})
