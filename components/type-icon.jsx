
function TypeIcon (props) {
  return (
    <div
      className={`is-pokemon-type is-${props.type}-type`}
      title={props.type}
    />
  )
}
export default TypeIcon
