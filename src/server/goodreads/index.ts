import { config } from 'dotenv'

import { syncGoodreads } from './goodreads_sync'

export async function handler() {
  const isLocal = process.env.NODE_ENV === 'local'
  if (isLocal) {
    config()
  }

  const { GOODREADS_KEY, GOODREADS_USER } = process.env
  if (!GOODREADS_KEY || !GOODREADS_USER) {
    throw new Error('Proper env variables not set')
  }

  try {
    const bookCount = await syncGoodreads(GOODREADS_KEY, GOODREADS_USER)
    console.log(`[GOODREADS SYNC] Added ${bookCount} books`)
    return { status: 200 }
  } catch (e) {
    throw new Error(`[GOODREADS SYNC] Error: ${e.message}`)
  }
}

if (process.env.NODE_ENV === 'local') {
  handler()
}
