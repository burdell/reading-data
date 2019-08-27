import { useState, useEffect } from 'react'
import { useQuery } from 'urql'

import { Book, Stats, FilterOptions } from '../../types'

import { DataService } from './data-service'
import { scroll } from '../ScrollToTop'

interface DataResults {
  books: Book[]
  stats: Stats | null
}

interface UseData {
  data: DataResults
  loading: boolean
  updateFilter(o: Partial<FilterOptions>): void
}

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
  const [loading, setLoading] = useState(false)

  function updateFilter(newFilter: Partial<FilterOptions>) {
    setFilter({ ...filter, ...newFilter })
  }

  useEffect(() => {
    setLoading(result.fetching)

    if (!result.data) return

    const filterResult = DataService.filter(result.data.books, filter)
    setReadingData(filterResult)
    scroll()
  }, [result, filter])

  return { data: readingData, loading, updateFilter }
}
