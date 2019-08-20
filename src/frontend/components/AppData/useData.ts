import { useQuery } from 'urql'

import { DataService } from './data-service'
import { Book, Stats } from '../../types'

interface DataResults {
  books: Book[]
  loading: boolean
  stats: Stats | null
}

const dataService = new DataService()

export function useData(): DataResults {
  const [result] = useQuery<{ books: Book[] }>({
    query: `{
          books { 
            id
            book_id
            title
            author
            my_rating
            number_of_pages
            date_read
            my_review
            isbn
            isbn_13
          } 
        }`
  })

  let books: Book[] = []
  let stats = null
  const loading = result.fetching

  if (!loading && result.data) {
    const filterResult = dataService.filter(result.data.books, {})
    books = filterResult.books
    stats = filterResult.stats
  }

  return { loading, books, stats }
}
