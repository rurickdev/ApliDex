
function PokemonCardPlaceholder () {
  return (
    <div className='ph-item pokemon-card-placeholder'>
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
