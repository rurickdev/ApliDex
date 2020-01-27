
import { useEffect } from 'react'
import LazyLoad, { forceCheck } from 'react-lazyload'

import PokemonCard from './pokemon-card'
import PokemonCardPlaceholder from './pokemon-card-placeholder'

function PokemonCardsGrid (props) {
  const { pokemonList, onClick } = props

  useEffect(() => {
    forceCheck()
  }, [])

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <div key={index} className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen'>
          <LazyLoad
            once
            offset={150}
            placeholder={<PokemonCardPlaceholder />}
          >
            <PokemonCard
              pokemon={pokemon}
              onClick={onClick}
            />
          </LazyLoad>
        </div>
      ))}
    </>
  )
}

export default PokemonCardsGrid
