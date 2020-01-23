
function TypeIcon (props) {
  return (
    <div className={`is-pokemon-type is-${props.type}-type column is-half is-paddingless`} title={props.type} />
  )
}
export default TypeIcon
