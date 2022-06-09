import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false)

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
          {cartOpen && (<div className="shop-cart">TEXT</div>)}
        </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;