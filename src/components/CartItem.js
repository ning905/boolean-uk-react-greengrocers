export const CartItem = props => {
  const { item, changeQuantity } = props

  return (
    <li>
      <img
        class="cart--item-icon"
        src={`./assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={e => changeQuantity(item, e.target.innerHTML)}
      >
        -
      </button>
      <span class="quantity-text center">{item.quantity}</span>
      <button
        class="quantity-btn add-btn center"
        onClick={e => changeQuantity(item, e.target.innerHTML)}
      >
        +
      </button>
    </li>
  )
}
