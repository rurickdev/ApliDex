
// Components
import PokemonCard from '../components/pokemon-card'

function Main (props) {
  const { pokemons, onClick } = props
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen' key={index}>
          {/* ToDo: Remove this */}
          {/* {pokemon.name} */}
          <PokemonCard
            pokemon={pokemon}
            onClick={onClick}
          />
        </div>
      ))}
    </>
  )
}

export default Main
