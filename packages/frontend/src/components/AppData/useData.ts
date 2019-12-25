import { useState, useEffect } from 'react'
import { useQuery } from 'urql'

import { Book, Stats, FilterOptions } from '../../types'

import { scroll } from '../ScrollToTop'
import { defaultFilter } from '../Sidebar/Filter'

import { DataService } from './data-service'
import {} from 'module'

interface DataResults {
  books: Book[]
  stats: Stats | null
}

export function useData() {
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
            isbn
          } 
        }`
  })
  const [filter, setFilter] = useState<FilterOptions>(defaultFilter())
  const [readingData, setReadingData] = useState<DataResults>({
    books: [],
    stats: null
  })
  const [loading, setLoading] = useState(true)

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
