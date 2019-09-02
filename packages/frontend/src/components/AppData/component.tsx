import React from 'react'
import { createClient, Provider } from 'urql'

import { App as MainApp } from '../App'

const apiUrl =
  'https://rgig1tr7ub.execute-api.us-east-1.amazonaws.com/Prod/graphql'
const apiClient = createClient({ url: apiUrl })

export function App() {
  return (
    <Provider value={apiClient}>
      <MainApp />
    </Provider>
  )
}
