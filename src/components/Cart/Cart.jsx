import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
function Cart(){

  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
  const shippingCost ='Grátis'; 



  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}  
      </div>

      <div className="cart-resume">
        <p className="total-resume">Resumo do Pedido:</p>
        <p className="total">Frete: {formatCurrency(shippingCost)}</p>
        <p className="total-final">Valor Total: {formatCurrency(totalPrice)}</p>
      </div>
    </section>
  );
}
export default Cart;
