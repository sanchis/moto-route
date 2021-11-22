import { gql, ApolloServer } from 'apollo-server-micro'
import { IncomingMessage, ServerResponse } from 'http'
import typesDefs from './typeDefs'
import resolvers from './resolvers'

const typeDefs = gql`
    ${typesDefs}
`

export async function createApolloServer (req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') {
    // TODO disable in production
    res.end()
    return
  }
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}
