export type BookConversion = Pick<
  Book,
  | 'Book Id'
  | 'Title'
  | 'Author'
  | 'My Rating'
  | 'Number of Pages'
  | 'Date Read'
  | 'My Review'
  | 'ISBN'
  | 'ISBN13'
>

export interface NewBook {
  book_id: number
  title: string
  author: string
  my_rating: number
  number_of_pages: number
  date_read: string
  my_review: string
  isbn?: string
  isbn_13?: string
}

export interface Book {
  'Book Id': number
  Title: string
  Author: string
  'Author l-f': string
  'Additional Authors': string
  ISBN: string
  ISBN13: string
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
  'Read Count': number
  'Recommended For': string
  'Recommended By': string
  'Owned Copies': string | number
  'Original Purchase Date': string
  'Original Purchase Location': string
  Condition: string
  'Condition Description': string
  BCID: string
}
