
# Deno GraphQL PoC

This is a proof of concept for building a graphql app using Deno. The graph provides a wrapper around one of the many apis provided by [PokeApi](https://pokeapi.co/).

This uses `oak_graphql` to mount the GraphQL server onto an `oak` app, and libraries like `dataloader` to dedupe requests to PokeApi

# Getting Started

- install `deno`
- install `velociraptor` cli: `deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.16/cli.js`
- `vr start`

Now go to `localhost:2345/graphql` for the GraphQL playground. A Sample Query:

```text
fragment PokemonInfo on Pokemon {
  id
  name
  weight
  spriteUrl
  types
}

query {
  pokemon (name: "pikachu") {
    ...PokemonInfo
  }
  
  pokemonCollection (offset: 10, limit: 25) {
    ...PokemonInfo
  }
}
```

# Thanks

- The folks who maintain the [PokeApi](https://pokeapi.co/)
- The folks who maintain and build [deno](https://deno.land/)
- The folks who maintain and build [jspm](https://jspm.org/)
- The folks who maintain and build any dependencies (oak, oak_graphql, ramda, dataloader)
- Umbopepato for [velociraptor](https://github.com/umbopepato/velociraptor) to run scripts
