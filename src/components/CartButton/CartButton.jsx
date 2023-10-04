import React from 'react';
import { BsCart } from 'react-icons/bs';

import './CartButton.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function CartButton() {

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);

  return (
    <button type="button"
      className="cart-button"
      onClick={ () => setIsCartVisible(!isCartVisible)}
    >
      <BsCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
