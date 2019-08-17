import React from 'react'
import { createClient, Provider } from 'urql'

import { DataService } from '../../data/data-service'
import { Books } from '../../data/books'

import { App as MainApp } from './App'

const apiUrl = 'https://rgig1tr7ub.execute-api.us-east-1.amazonaws.com/Prod'
const apiClient = createClient({ url: apiUrl })
const dataService = new DataService()

export function App() {
  const { books } = dataService.filter(Books, {})
  return (
    <Provider value={apiClient}>
      <MainApp books={books} filterBooks={() => null} loading={false} />
    </Provider>
  )
}
