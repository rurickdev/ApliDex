
import TypeIcon from '../components/type-icon'

const ghostImage = 'http://cdn.aplidex.rurick.dev.s3.us-east-2.amazonaws.com/assets/ghost.png'

function PokemonCard (props) {
  const { pokemon } = props

  return (
    <div className='is-pokemon-card card'>

      <figure className='is-pokemon-image-container card-image'>
        <img className='is-pokemon-image' src={pokemon.sprites.front_default || ghostImage} alt={pokemon.name} />
      </figure>

      <div className='is-pokemon-data card-content columns is-mobile is-multiline is-marginless is-paddingless is-vcentered'>

        <span className='is-pokemon-name column is-full is-size-3 is-size-4-mobile'>
          {pokemon.name}
        </span>

        <span className='is-pokemon-number column'>#{pokemon.id}</span>

        {pokemon.types.map((type, index) => (
          <div className='column is-one-quarter is-paddingless' key={index}>
            <TypeIcon type={type.type.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
