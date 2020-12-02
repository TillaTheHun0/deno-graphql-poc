
import { Application, applyGraphQL, Router } from '../deps.js'

import { schema, contexter } from './gql/schema.js'

const app = new Application()

const GraphQlService = await applyGraphQL({
  Router,
  ...schema,
  context: contexter
})

app.use(GraphQlService.routes(), GraphQlService.allowedMethods())

app.use(ctx => {
  ctx.response.body = 'Hello from your first oak server'
})

console.log(`🌳 oak server running at http://localhost:2345/ 🌳`)

await app.listen({ port: 2345 })
