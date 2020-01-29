
import { useState, useEffect } from 'react'

import TypeIcon from './type-icon'
import PokemonCardPlaceholder from './pokemon-card-placeholder'

import api from '../lib/api'
import utils from '../lib/utils/utils'

import urls from '../constants/urls'

function PokemonCard (props) {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonId, setPokemonId] = useState(0)
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonSprites, setPokemonSprites] = useState({})
  const [getPokemonError, setPokemonError] = useState(false)
  const [pokemonRawData, setPokemonRawData] = useState({})

  const { pokemon, onClick } = props

  async function getPokemon (name) {
    return api.pokeapi.getPokemonByName(name)
  }

  useEffect(() => {
    getPokemon(pokemon.name)
      .then((pokemonData) => {
        setPokemonName(pokemonData.name)
        setPokemonId(pokemonData.id)
        setPokemonTypes(pokemonData.types)
        setPokemonSprites(pokemonData.sprites)
        setPokemonRawData(pokemonData)
      })
      .catch(error => {
        setPokemonError(true)
        console.error(error)
      })
  }, [])

  const hasData = pokemonName && pokemonId && pokemonSprites && pokemonTypes && !getPokemonError

  return (
    <>
      {
        hasData
          ? (
            <div
              className='is-pokemon-card card'
              onClick={() => { onClick(pokemonRawData) }}
            >
              <figure className='is-pokemon-image-container card-image'>
                {
                  pokemonSprites.front_default
                    ? (
                      <img
                        className='is-pokemon-image'
                        src={pokemonSprites.front_default}
                        alt={pokemonName}
                      />
                    )
                    : (
                      <img
                        className='is-no-sprite-image'
                        src={urls.noSprite}
                        alt={pokemonName}
                      />
                    )
                }
              </figure>

              <div className='is-pokemon-data card-content columns is-mobile is-multiline is-marginless is-paddingless is-vcentered'>

                <span className='is-pokemon-name has-bit-font has-not-scrollbar column is-full is-size-6 is-size-7-mobile'>
                  {utils.cleanName(pokemonName)}
                </span>

                <span className='is-pokemon-number column'>
                  #{pokemonId}
                </span>

                {pokemonTypes.map((type, index) => (
                  <div
                    className='column is-one-quarter is-paddingless'
                    key={index}
                  >
                    <TypeIcon type={type.type.name} />
                  </div>
                ))}
              </div>
            </div>
          )
          : <PokemonCardPlaceholder />
      }
    </>
  )
}

export default PokemonCard
