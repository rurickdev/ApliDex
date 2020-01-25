
import { useState, useEffect } from 'react'

import TypeIcon from '../components/type-icon'

import api from '../lib/api'
import utils from '../lib/utils/utils'

const ghostImage = 'http://cdn.aplidex.rurick.dev.s3.us-east-2.amazonaws.com/assets/ghost.png'

function PokemonCard (props) {
  const [pokemonData, setPokemon] = useState({
    sprites: {},
    name: '',
    types: [],
    id: 1
  })

  const { pokemon } = props

  async function getPokemon (name) {
    return api.pokeapi.getPokemonByName(name)
  }

  useEffect(() => {
    getPokemon(pokemon.name)
      .then(setPokemon)
      .catch(error => {
        setPokemon({
          name: error,
          id: 0,
          types: [],
          sprites: { front_default: '' }
        })
        console.error(error)
      })
  }, [])

  return (
    <div className='is-pokemon-card card'>
      <figure className='is-pokemon-image-container card-image'>
        <img className='is-pokemon-image' src={pokemonData.sprites.front_default || ghostImage} alt={pokemonData.name} />
      </figure>

      <div className='is-pokemon-data card-content columns is-mobile is-multiline is-marginless is-paddingless is-vcentered'>

        <span className='is-pokemon-name has-not-scrollbar column is-full is-size-3 is-size-4-mobile'>
          {utils.cleanName(pokemonData.name)}
        </span>

        <span className='is-pokemon-number column'>#{pokemonData.id}</span>

        {pokemonData.types.map((type, index) => (
          <div className='column is-one-quarter is-paddingless' key={index}>
            <TypeIcon type={type.type.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
