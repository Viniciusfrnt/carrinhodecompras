import React from 'react';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types'; 
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;
  const {cartItems, setCartItems} = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card-image" />
      <div className="card-infos">
        <h2 className="card-preco">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button 
        type="button"
        className="button-add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({}), 
}.isRequired;

export default ProductCard;
