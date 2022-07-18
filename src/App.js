import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import { StoreItemList } from './components/StoreItemList'
import { CartItemList } from './components/CartItemList'
import { CategoryCheckboxes } from './components/CategoryCheckboxes'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const storeItems = initialStoreItems
  const [cartItems, setCartItems] = useState([])

  const addToCart = item => {
    const findInCart = cartItems.find(cartItem => cartItem.id === item.id)

    if (findInCart) {
      const updatedCart = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )

      setCartItems(updatedCart)
    } else {
      const thisItem = { ...item, quantity: 1 }

      setCartItems([...cartItems, thisItem])
    }
  }

  const changeQuantity = (item, change) => {
    let changedCart

    if (change === '-') {
      if (item.quantity === 1) {
        changedCart = cartItems.filter(cartItem => cartItem.id !== item.id)
      } else {
        changedCart = cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      }
    } else if (change === '+') {
      changedCart = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    }

    setCartItems(changedCart)
  }

  const totalCost = cartItems
    .reduce(
      (totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity,
      0
    )
    .toFixed(2)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>

        <CategoryCheckboxes />

        <StoreItemList items={storeItems} addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <CartItemList items={cartItems} changeQuantity={changeQuantity} />
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{totalCost}</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
