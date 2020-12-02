
import { Dataloader } from '../../deps.js'

import { fetchPokemon } from '../client.js'

export const pokemonByName = () => new Dataloader(names => {
  return Promise.all(
    names.map(fetchPokemon)
  )
})
