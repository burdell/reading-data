import { ApolloServer } from 'apollo-server-lambda'

import { getServerConfig } from './graphql'

const server = new ApolloServer(getServerConfig())
export const handler = server.createHandler({
  cors: { origin: '*', credentials: true }
})
