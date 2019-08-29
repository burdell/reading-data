import { config } from 'dotenv'

import { syncGoodreads } from './goodreads_sync'

if (process.env.NODE_ENV === 'local') {
  config()
}

export function handler() {
  const { GOODREADS_KEY, GOODREADS_USER } = process.env
  if (!GOODREADS_KEY || !GOODREADS_USER) {
    throw new Error('Proper env variables not set')
  }

  syncGoodreads(GOODREADS_KEY, GOODREADS_USER)
}
