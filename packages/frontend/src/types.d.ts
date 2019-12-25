export interface Book {
  id: string
  book_id: number
  title: string
  author: string
  my_rating: number
  number_of_pages: number
  date_read: string
  my_review: string
  isbn?: string
}

export interface Stats {
  bookCount: number
  pageCount: number
  ratingCount: number
}

export interface FilterOptions {
  read: boolean
  year: number[]
  rating: number[]
  month: number[]
}

export interface BookDataService {
  filter(options: FilterOptions): Promise<BookDataServiceResult>
}

export interface BookDataServiceResult {
  books: Book[]
  stats: Stats
}
