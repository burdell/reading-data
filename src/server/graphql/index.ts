import { server } from './graphql'

export const graphqlHander = server.createHandler({
  cors: { origin: '*', credentials: true }
})
