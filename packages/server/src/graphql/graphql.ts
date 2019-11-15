import { gql } from 'apollo-server'
import AWS from 'aws-sdk'

const dynamo = new AWS.DynamoDB.DocumentClient()

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
      const result = await dynamo.scan({ TableName: 'Books' }).promise()
      return result.Items
    }
  }
}

export function getServerConfig() {
  return {
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
  }
}
