
import { useState } from 'react'
import Head from 'next/head'

import PokemonDetails from '../components/pokemon-details'
import RurickDetails from '../components/rurick-details'

import api from '../lib/api'

import '../sass/index.scss'

function MyApp (props) {
  const { Component, pokemonList, rurick } = props

  const [pokemonSelected, setPokemon] = useState(null)

  function selectPokemon (pokemon) {
    setPokemon(pokemon)
  }

  return (
    <>
      <Head>
        <title>ApliDex</title>
      </Head>
      <div className='columns is-multiline is-marginless is-paddingless'>
        <aside className='column is-one-quarter is-hidden-mobile'>
          <div className='is-details-container has-not-scrollbar '>
            {pokemonSelected
              ? <PokemonDetails pokemon={pokemonSelected} />
              : <RurickDetails data={rurick} />}
          </div>
        </aside>

        <div className='column is-three-quarters has-background-white-ter'>
          <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
            <div className='column is-full'>
              {/* ToDo: Crear el componente buscador */}
              {/* <div className='search-bar'>
                <h1>Buscador</h1>
              </div> */}
            </div>
            <Component
              pokemons={pokemonList}
              onClick={selectPokemon}
            />
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
  const rurick = await api.rurick.getInfo()
  const { results } = await api.pokeapi.getPokemonsList()

  return {
    rurick,
    pokemonList: results
  }
}

export default MyApp
