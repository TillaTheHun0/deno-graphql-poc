
import { R } from '../../deps.js'

const { mergeDeepRight, reduce } = R

import { pokemonByName } from './dataloader.js'

import * as Pokemon from './Pokemon.js'
import * as Query from './Query.js'

export const schema = reduce(
  (acc, { typeDefs, resolvers }) => ({
    typeDefs: [...acc.typeDefs, typeDefs],
    resolvers: mergeDeepRight(acc.resolvers, resolvers)
  }),
  { typeDefs: [], resolvers: {} },
  [
    Pokemon,
    Query
  ]
)

export const contexter = context => mergeDeepRight(context, {
  dataloaders: {
    pokemonByName: pokemonByName()
  }
})

