import { useState } from 'react'
import { ItemDetail } from './ItemDetail'

export const StoreItem = props => {
  const { item, addToCart } = props
  const [showDetail, setShowDetail] = useState(false)

  const toggleDisplay = () => {
    setShowDetail(!showDetail)
  }

  return (
    <li>
      <div onClick={toggleDisplay}>
        {showDetail ? (
          <ItemDetail item={item} />
        ) : (
          <div class="store--item-icon">
            <img src={`./assets/icons/${item.id}.svg`} alt={item.name} />
          </div>
        )}
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  )
}
