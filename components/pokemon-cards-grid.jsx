
import { FixedSizeGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import PokemonCard from './pokemon-card'

import utils from '../lib/utils/utils'

function PokemonCardsGrid (props) {
  const { pokemonList, onClick } = props

  let pokemonRows = []

  function getRowHeight (height) {
    if (height <= 600) {
      return 225
    }
    if (height <= 700) {
      console.log(640)
      return (height * 0.35)
    }
    if (height <= 800) {
      console.log(640)
      return (height * 0.30)
    }
    if (height <= 900) {
      console.log(640)
      return (height * 0.28)
    }

    return (height * 0.25)
  }

  function Cell ({ columnIndex, rowIndex, style }) {
    const pokemon = pokemonRows[rowIndex][columnIndex]
    return (
      <>
        {pokemon && (
          <div
            className='pokemon-card-container column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen'
            style={style}
          >
            <PokemonCard
              pokemon={pokemon}
              onClick={onClick}
            />
          </div>
        )}
      </>
    )
  }

  function Grid ({ height, width }) {
    const columnCount = utils.getColumnCount(width)
    pokemonRows = utils.listToMatrix(pokemonList, columnCount)

    return (
      <FixedSizeGrid
        className='pokemon-card-grid'
        columnCount={columnCount}
        columnWidth={width / (columnCount * 1.02)}
        width={width}
        rowCount={pokemonRows.length}
        rowHeight={getRowHeight(height)}
        height={height}
      >
        {Cell}
      </FixedSizeGrid>
    )
  }

  return (
    <AutoSizer>
      {Grid}
    </AutoSizer>
  )
}

export default PokemonCardsGrid
