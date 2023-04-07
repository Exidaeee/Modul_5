import React, { useContext } from 'react';
import { CartContext } from './Catalog';

function Cart() {
  const cart = useContext(CartContext);
  return (
    <div>
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}$
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cart;


