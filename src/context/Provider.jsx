import React, { useState } from 'react'; // Importe useState do React
import PropTypes from 'prop-types'; // Importe PropTypes com P maiúsculo
import AppContext from './AppContext';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Correção no nome da função setter
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);


  const value = {
    products, 
    setProducts,
    loading,
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible,
    setIsCartVisible
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any, // Corrija para PropTypes com P maiúsculo
}.isRequired;

export default Provider;
