
import StatsChart from './statsChart'
import TypeIcon from './type-icon'

import utils from '../lib/utils/utils'

// ToDo: Clean this
const ghostImage = 'http://cdn.aplidex.rurick.dev.s3.us-east-2.amazonaws.com/assets/ghost.png'
const ditto = require('../constants/ditto.json')

function PokemonDetails (props) {
  const {
    pokemon = ditto
  } = props

  const {
    sprites,
    name,
    types,
    stats,
    abilities,
    moves
  } = pokemon

  const filteredSprites = Object.values(sprites).filter(sprite => sprite)
  const nameCamelCase = utils.firstLetterToUpperCase(name)

  return (
    <div className='is-pokemon-details columns is-multiline is-centered'>
      <div className='column is-11 is-size-3 has-text-centered'>
        <h1>{nameCamelCase}</h1>
      </div>

      <figure className='column is-11'>
        <img className='is-pokemon-image image is-128x128 has-text-centered' src={sprites.front_default || ghostImage} alt={name} />
      </figure>

      <div className='column is-11 is-size-3'>
        <div className='columns is-multiline is-centered'>
          {types.map((type, index) => (
            <div className='column is-one-quarter is-paddingless' key={index}>
              <TypeIcon type={type.type.name} />
            </div>
          ))}
        </div>
      </div>

      <div className='column is-11 is-size-4'>
        <StatsChart stats={stats} pokemonName={nameCamelCase} />
      </div>

      <div className='column is-11 is-size-4'>
        <div className='columns is-multiline'>
          <div className='column is half'>
            <h5>Abilities</h5>
            {abilities.map((ability, index) => (
              <h6 className='is-size-6' key={index}>
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
                  <h6 className='is-size-6' key={index}>
                    {utils.removeHyphens(move.move.name)}
                  </h6>
                )
              ]
            }, [])}
          </div>
        </div>
      </div>

      <div className='column is-11 is-size-4'>
        <h5>Sprites</h5>
        <div className='is-sprites-container columns is-multiline'>
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
