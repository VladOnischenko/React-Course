import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order'

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false)

  const showOrder = () => {
    let totalPrice = 0
    props.orders.forEach( el => totalPrice += Number.parseFloat(el.price))
    return (
      <>
        {props.orders.map( el => (
          <Order key={el.id} item={el} onDelete={props.onDelete}/>
        ))}
        <p className="total-price">Total price: {new Intl.NumberFormat().format(totalPrice)}$</p>
      </>
    )
  }

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Basket is empty</h2>
      </div>
    )
  }

  return (
    <header>
        <div>
          <span className="logo">House Staff</span>
          <ul className="nav">
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
          </ul>
          <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
          {cartOpen && (
            <div className="shop-cart">
              { props.orders.length > 0 ?
                  showOrder() : showNothing()
              }
            </div>
          )}
        </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;