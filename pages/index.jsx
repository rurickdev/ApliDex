
// ToDo: Mod this file to show the SWP
function Main (props) {
  console.log('[Pokemons]', Object.keys(props))
  return (
    <>
      <h1>Initial Version of ApliDex</h1>
      {props.pokemon.name}
      <span className='icon'>
        <i className='fas fa-home' />
      </span>
    </>
  )
}

export default Main
