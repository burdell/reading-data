import { useQuery } from 'urql'

import { DataService } from './data-service'
import { Book, Stats, FilterOptions } from '../../types'
import { useState, useEffect } from 'react'

interface DataResults {
  books: Book[]
  stats: Stats | null
}

interface UseData {
  data: DataResults
  loading: boolean
  updateFilter(o: Partial<FilterOptions>): void
}

const dataService = new DataService()

function defaultFilter(): FilterOptions {
  return {
    read: true,
    year: [2018],
    month: [],
    rating: []
  }
}

export function useData(): UseData {
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
  const [filter, setFilter] = useState<FilterOptions>(defaultFilter())
  const [readingData, setReadingData] = useState<DataResults>({
    books: [],
    stats: null
  })

  function updateFilter(newFilter: Partial<FilterOptions>) {
    setFilter({ ...filter, ...newFilter })
  }

  const loading = result.fetching
  useEffect(() => {
    if (!loading && result.data) {
      const filterResult = dataService.filter(result.data.books, filter)
      setReadingData(filterResult)
    }
  }, [result, filter])

  return { data: readingData, loading, updateFilter }
}
