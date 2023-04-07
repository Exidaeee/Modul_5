import React, { useState, createContext, useContext } from 'react';
import data from './data';

const CartContext = createContext([]);

function Catalog() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);  
  }

  return (
    <CartContext.Provider value={cart}>
      {data.products.map(item => (
        <Product key={item.id} item={item} onAddToCart={addToCart} />
      ))}
    </CartContext.Provider>
  );
}

function Product({ item, onAddToCart }) {
  function handleAddToCartClick() {
    onAddToCart(item);
  }
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={handleAddToCartClick}>Додати до кошику</button>
    </div>
  );
}
export default Catalog;
export { CartContext };



