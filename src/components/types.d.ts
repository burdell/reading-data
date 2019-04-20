export interface Book {
  'Book Id': number
  Title: string
  Author: string
  'Author l-f': string
  'Additional Authors': string
  ISBN: number
  ISBN13: number
  'My Rating': number
  'Average Rating': number
  Publisher: string
  Binding: string
  'Number of Pages': number
  'Year Published': number
  'Original Publication Year': number
  'Date Read': string
  'Date Added': string
  Bookshelves: string
  'Bookshelves with positions': string
  'Exclusive Shelf': string
  'My Review': string
  Spoiler: string
  'Private Notes': string
  'Read Count': string
  'Recommended For': string
  'Recommended By': string
  'Owned Copies': number
  'Original Purchase Date': string
  'Original Purchase Location': string
  Condition: string
  'Condition Description': string
  BCID: string
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
  month: string[]
}

export interface BookDataService {
  filter(options: FilterOptions): Promise<BookDataServiceResult>
}

export interface BookDataServiceResult {
  books: Book[]
  stats: Stats
}
