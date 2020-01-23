
import TypeIcon from '../components/type-icon'

function PokemonCard (props) {
  const { pokemon } = props

  // ToDo: redo the structure
  return (
    <div className='is-pokemon-card card'>
      <figure className='is-pokemon-image-container card-image'>
        <img className='is-pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span className='is-pokemon-number'>#{pokemon.id}</span>
        <div className='is-pokemon-type-container columns is-marginless is-paddingless is-mobile'>
          {pokemon.types.map((type, index) => (
            <TypeIcon type={type.type.name} key={index} />
          ))}
        </div>
      </figure>
      <div className='is-pokemon-data card-content columns is-multiline is-marginless is-paddingless'>
        <div className='is-pokemon-name column is-full is-size-3'>
          <span>{pokemon.name}</span>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
