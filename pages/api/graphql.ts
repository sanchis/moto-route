import { createApolloServer } from 'lib/api/graphql'
import Cors from 'micro-cors'

const cors = Cors() // TODO need it in production ?
export default cors(createApolloServer)
export const config = {
  api: {
    bodyParser: false
  }
}
