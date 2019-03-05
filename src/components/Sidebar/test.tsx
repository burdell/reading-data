import React from 'react'
import { render } from 'react-testing-library'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('toggles the sidebar', () => {
    const toggleSidebar = jest.fn()
    const result = render(
      <Sidebar
        onChange={() => null}
        toggleSidebar={toggleSidebar}
        open={true}
      />
    )

    result.getByText('X').click()

    expect(toggleSidebar).toHaveBeenCalled()
  })
})
