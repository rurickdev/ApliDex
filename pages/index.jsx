
// Components
import PokemonCard from '../components/pokemon-card'

function Main (props) {
  const { pokemons } = props
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop' key={index}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </>
  )
}

export default Main
