import { ApolloServer, gql } from 'apollo-server'

import { getAllBooks } from '../db'

const typeDefs = gql`
  type Book {
    id: String
    book_id: Int
    title: String
    author: String
    my_rating: Int
    number_of_pages: Int
    date_read: String
    my_review: String
    isbn: String
    isbn_13: String
  }

  type Query {
    books: [Book!]!
  }
`

const resolvers = {
  Query: {
    books: async () => {
      return getAllBooks()
    }
  }
}

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
