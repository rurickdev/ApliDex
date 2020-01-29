
import { FixedSizeGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import PokemonCard from './pokemon-card'

import utils from '../lib/utils/utils'

function PokemonCardsGrid (props) {
  const { pokemonList, onClick } = props

  let pokemonRows = []

  function Cell ({ columnIndex, rowIndex, style }) {
    return (
      <div
        className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen'
        style={style}
      >
        <PokemonCard
          pokemon={pokemonRows[rowIndex][columnIndex]}
          onClick={onClick}
        />
      </div>
    )
  }

  function Grid ({ height, width }) {
    const columnCount = utils.getColumnCount(width)
    pokemonRows = utils.listToMatrix(pokemonList, columnCount)

    return (
      <FixedSizeGrid
        columnCount={columnCount}
        columnWidth={width / (columnCount * 1.02)}
        width={width}
        rowCount={pokemonRows.length}
        rowHeight={230}
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
