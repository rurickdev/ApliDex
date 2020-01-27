
import StatsChart from './statsChart'
import TypeIcon from './type-icon'

import utils from '../lib/utils/utils'

import urls from '../constants/urls'

function PokemonDetails (props) {
  const {
    pokemon = {}
  } = props

  const {
    abilities,
    moves = [],
    name = '',
    sprites = {},
    stats = [],
    types = []
  } = pokemon

  const filteredSprites = Object.values(sprites).filter(sprite => sprite)
  const nameCamelCase = utils.firstLetterToUpperCase(name)
  const nameCleaned = utils.removeHyphens(name)

  return (
    <div className='is-pokemon-details columns is-paddingless is-marginless is-multiline is-centered'>
      {/* Name */}
      <div className='column is-11 is-size-3 has-text-centered'>
        <h1 className='is-pokemon-name'>
          {nameCleaned}
        </h1>
      </div>

      {/* Picture */}
      <figure className='column is-11'>
        <img
          className='is-pokemon-image image is-128x128 has-text-centered'
          src={sprites.front_default || urls.ghostImage}
          alt={name}
        />
      </figure>

      {/* Types */}
      <div className='column is-11 is-size-3'>
        <div className='columns is-multiline is-mobile is-centered'>
          {types.map((type, index) => (
            <div className='column is-one-quarter is-paddingless' key={index}>
              <TypeIcon type={type.type.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Chart */}
      <div className='column is-11 is-size-4'>
        <StatsChart stats={stats} pokemonName={nameCamelCase} />
      </div>

      {/* Abilities and Movements */}
      <div className='column is-11 is-size-4'>
        <div className='columns is-multiline is-mobile'>
          <div className='column is half'>
            <h5>Abilities</h5>
            {abilities.map((ability, index) => (
              <h6 className='is-size-6 is-size-7-mobile' key={index}>
                {utils.removeHyphens(ability.ability.name)}
              </h6>
            ))}
          </div>
          <div className='column is half'>
            <h5>Movements</h5>
            {moves.reduce((moves, move, index) => {
              if (moves.length > 2) return moves
              return [
                ...moves,
                (
                  <h6 className='is-size-6 is-size-7-mobile' key={index}>
                    {utils.removeHyphens(move.move.name)}
                  </h6>
                )
              ]
            }, [])}
          </div>
        </div>
      </div>

      {/* Sprites */}
      <div className='column is-11 is-size-4'>
        <h5>Sprites</h5>
        <div className='is-sprites-container columns is-multiline is-mobile'>
          {filteredSprites.map((sprite, index) => (
            <figure className='column is-one-quarter' key={index}>
              <img src={sprite} alt='' />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
