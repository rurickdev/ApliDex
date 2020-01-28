
import PokemonCardGrid from '../components/pokemon-cards-grid'

function Index (props) {
  const { pokemons, onClick } = props

  return (
    <PokemonCardGrid
      pokemonList={pokemons}
      onClick={onClick}
    />
  )
}

export default Index
