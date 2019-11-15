import { ApolloServer } from 'apollo-server'

import { getServerConfig } from './graphql/graphql'

export const server = new ApolloServer(getServerConfig())

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
