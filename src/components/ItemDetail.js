export const ItemDetail = props => {
  const { item } = props
  return (
    <div>
      <h2>{item.name}</h2>
      <p>£{item.price}</p>
    </div>
  )
}
