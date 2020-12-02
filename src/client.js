
const BASE_URL = 'https://pokeapi.co/api/v2'

export async function fetchPokemon (name) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`)
  return res.json()
}

export async function fetchPokemons ({ offset = 0, limit = 30 } = {}) {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
  return res.json()
}
