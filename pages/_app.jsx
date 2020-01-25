
import Head from 'next/head'

import CharacterDetails from '../components/character-details'

import api from '../lib/api'

import '../sass/index.scss'

function MyApp (props) {
  const { Component, pokemonList } = props
  return (
    <>
      <Head>
        <title>ApliDex</title>
      </Head>
      <div className='columns is-multiline is-marginless is-paddingless'>
        <aside className='column is-one-quarter is-hidden-mobile'>
          {/* ToDo: pass the default character data */}
          <CharacterDetails />
        </aside>

        <div className='column is-three-quarters has-background-white-ter'>
          <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
            <div className='column is-full'>
              {/* ToDo: Crear el componente buscador */}
              <div className='search-bar'>
                <h1>Buscador</h1>
              </div>
            </div>
            <Component pokemons={pokemonList} />
          </div>
        </div>
      </div>
      <footer className='details-container is-hidden-tablet'>
        <h1>Details</h1>
      </footer>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const { results } = await api.pokeapi.getPokemonsList()
  return { pokemonList: results }
}

export default MyApp
