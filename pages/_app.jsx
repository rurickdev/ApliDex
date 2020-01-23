
import Head from 'next/head'

import pokedex from '../lib/api'

import '../sass/index.scss'

function MyApp (props) {
  const { Component, pokemons } = props
  console.log('[pageProps]', pokemons.length)
  return (
    <>
      <Head>
        <title>ApliDex</title>
      </Head>
      <div className='columns is-multiline is-marginless is-paddingless'>
        <aside className='column is-one-quarter is-hidden-mobile'>
          <div className='details-container'>
            <h1>Details</h1>
          </div>
        </aside>

        <div className='column is-three-quarters has-background-white-ter'>
          <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
            <div className='column is-full'>
              {/* ToDo: Crear el componente buscador */}
              <div className='search-bar'>
                <h1>Buscador</h1>
              </div>
            </div>
            {/* ToDo: Cambiar esto por la petición a pokeapi */}
            <Component pokemon={pokemons[0]} />
          </div>
        </div>
      </div>
      <footer className='details-container'>
        <h1>Details</h1>
      </footer>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const { results } = await pokedex.getPokemonsList()

  const pokemonListWithDetailsPromises = results.map(pokemon => pokedex.getPokemonByName(pokemon.name))

  const pokemonListWithDetails = await Promise.all(pokemonListWithDetailsPromises)

  return { pokemons: pokemonListWithDetails }
}

export default MyApp
