import React from 'react'
import { createClient, Provider } from 'urql'
import { ThemeProvider } from '@chakra-ui/core'

import { App as MainApp } from '../App'

const apiUrl =
  'https://rgig1tr7ub.execute-api.us-east-1.amazonaws.com/Prod/graphql'
const apiClient = createClient({ url: apiUrl })

export function App() {
  return (
    <ThemeProvider>
      <Provider value={apiClient}>
        <MainApp />
      </Provider>
    </ThemeProvider>
  )
}
