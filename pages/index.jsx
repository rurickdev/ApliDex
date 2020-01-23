
// Components
import PokemonCard from '../components/pokemon-card'

function Main () {
  // ToDo: Save the api response here
  const pokemonList = []
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop' key={index}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </>
  )
}

export default Main
