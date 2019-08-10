// 'Book Id': 25937923,
//     Title: "32 Yolks: From My Mother's Table to Working the Line",
//     Author: 'Eric Ripert',
//     'Author l-f': 'Ripert, Eric',
//     ISBN: '="0812992989"',
//     ISBN13: '="9780812992984"',
//     'My Rating': 4,
//     'Average Rating': 3.84,
//     Publisher: 'Random House',
//     Binding: 'Hardcover',
//     'Number of Pages': 247,
//     'Year Published': 2016,
//     'Original Publication Year': 2016,
//     'Date Read': '2017/12/26',
//     'Date Added': '2017/12/25',
//     'Exclusive Shelf': 'read',
//     'Read Count': 1,
//     'Owned Copies': '0'

export interface Book {
  'Book Id'?: number
  Title?: string
  Author?: string
  'Author l-f'?: string
  'Additional Authors'?: string
  ISBN?: string
  ISBN13?: string
  'My Rating'?: number
  'Average Rating'?: number
  Publisher?: string
  Binding?: string
  'Number of Pages'?: number
  'Year Published'?: number
  'Original Publication Year'?: number
  'Date Read'?: string
  'Date Added'?: string
  Bookshelves?: string
  'Bookshelves with positions'?: string
  'Exclusive Shelf'?: string
  'My Review'?: string
  Spoiler?: string
  'Private Notes'?: string
  'Read Count'?: number
  'Recommended For'?: string
  'Recommended By'?: string
  'Owned Copies'?: string | number
  'Original Purchase Date'?: string
  'Original Purchase Location'?: string
  Condition?: string
  'Condition Description'?: string
  BCID?: string
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
