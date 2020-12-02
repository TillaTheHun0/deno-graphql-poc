

import { R , gql } from '../../deps.js'

const { andThen, compose, map, prop, path } = R

export const loadPokemonAndMapResolver = mapper =>
  (_, args, { dataloaders }) =>
    compose(
      andThen(mapper),
      dataloaders.pokemonByName.load.bind(dataloaders.pokemonByName),
      prop('name')
    )(_)

export const typeDefs = gql`
  type Pokemon {
    id: Int!
    name: String!
    weight: Int!
    spriteUrl: String!
    types: [String!]!
  }
`

export const resolvers = {
  Pokemon: {
    id: loadPokemonAndMapResolver(
      prop('id')
    ),
    name: loadPokemonAndMapResolver(
      prop('name')
    ),
    weight: loadPokemonAndMapResolver(
      prop('weight')
    ),
    spriteUrl: loadPokemonAndMapResolver(
      path(['sprites', 'front_default'])
    ),
    types: loadPokemonAndMapResolver(
      // Only want the name of each type
      compose(
        map(prop('name')),
        map(prop('type')),
        prop('types')
      )
    )
  }
}
