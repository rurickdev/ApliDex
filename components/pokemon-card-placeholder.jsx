
function PokemonCardPlaceholder () {
  return (
    <div className='pokemon-card-placeholder ph-item'>
      <div className='ph-col-12'>
        <div className='ph-picture' />
        <div className='ph-row'>
          <div className='ph-col-12 big' />
        </div>
        <div className='ph-row'>
          <div className='ph-col-4 big' />
          <div className='ph-col-2 empty ' />
          <div className='ph-col-2 big ph-circular' />
          <div className='ph-col-2 empty ' />
          <div className='ph-col-2 big ph-circular' />
        </div>
      </div>
    </div>
  )
}

export default PokemonCardPlaceholder
