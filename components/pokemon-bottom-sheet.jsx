
import { useState } from 'react'

import TypeIcon from './type-icon'
import PokemonDetails from './pokemon-details'

function PokemonBottomSheet (props) {
  const { pokemon = {} } = props
  const [isOpen, setOpen] = useState(false)

  const {
    sprites,
    name,
    types,
    id
  } = pokemon

  function toggleOpen () {
    setOpen(!isOpen)
  }

  return (
    <>
      {isOpen
        ? (
          <>
            <div className='column is-full has-text-right is-marginless'>
              <span
                className='mdi mdi-close'
                onClick={() => { toggleOpen() }}
              />
            </div>
            <div className='column is-pokemon-details-mobile'>
              <PokemonDetails pokemon={pokemon} />
            </div>
          </>
        )
        : (
          <div
            className='columns is-multiline is-mobile'
            onClick={() => { toggleOpen() }}
          >
            <div className='column is-one-third'>
              <img src={sprites.front_default} alt={name} className='is-pokemon-image' />
            </div>
            <div className='is-pokemon-data-mobile column is-two-thirds'>
              <div className='columns is-multiline is-mobile is-vcentered'>
                <span className='is-pokemon-name-mobile has-bit-font column is-full has-not-scrollbar'>
                  {name}
                </span>
                <span className='column is-half is-marginless'>
                  #{id}
                </span>
                {types.map((type, index) => (
                  <div className='column is-one-quarter' key={index}>
                    <TypeIcon type={type.type.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default PokemonBottomSheet
