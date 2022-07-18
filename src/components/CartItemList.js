import { CartItem } from './CartItem'

export const CartItemList = props => {
  const { items, changeQuantity } = props
  return (
    <ul className="item-list cart--item-list">
      {items.map(item => (
        <CartItem key={item.id} item={item} changeQuantity={changeQuantity} />
      ))}
    </ul>
  )
}
