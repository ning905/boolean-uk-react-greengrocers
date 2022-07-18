export const StoreItem = props => {
  const { item, addToCart } = props

  return (
    <li>
      <div class="store--item-icon">
        <img src={`./assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  )
}
