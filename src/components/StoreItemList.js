import { StoreItem } from './StoreItem'

export const StoreItemList = props => {
  const { items, addToCart } = props
  return (
    <ul className="item-list store--item-list">
      {items.map(item => (
        <StoreItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </ul>
  )
}
