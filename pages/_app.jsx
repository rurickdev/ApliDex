
import { useState } from 'react'
import Head from 'next/head'

import PokemonDetails from '../components/pokemon-details'
import PokemonBottomSheet from '../components/pokemon-bottom-sheet'
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
        <aside className='column is-one-quarter is-paddingless is-hidden-mobile'>
          <div className='is-details-container has-not-scrollbar '>
            {pokemonSelected
              ? <PokemonDetails pokemon={pokemonSelected} />
              : <RurickDetails data={rurick} />}
          </div>
        </aside>

        <div className='column is-three-quarters has-background-white-ter'>
          <div className='columns is-multiline is-mobile is-marginless is-paddingless'>
            {/* ToDo: Crear el componente buscador */}
            {/* <div className='column is-full'>
              <div className='search-bar'>
                <h1>Buscador</h1>
              </div>
            </div> */}
            <Component
              pokemons={pokemonList}
              onClick={selectPokemon}
            />
          </div>
        </div>
      </div>
      <section className='is-details-container-mobile is-hidden-tablet'>
        {pokemonSelected
          ? <PokemonBottomSheet pokemon={pokemonSelected} />
          : <h1>Detalles</h1>}
        {/* : <RurickDetails data={rurick} />} */}
      </section>
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
