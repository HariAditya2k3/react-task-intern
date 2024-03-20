// Orders.jsx
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import './Orders.css';

const Orders = () => {
  const { addToCart } = useContext(CartContext);

  const books = [
    { id: 1, title: 'Book 1', description: 'NEET study material for Physics', price: 10 },
    { id: 2, title: 'Book 2', description: 'NEET study material for Chemistry', price: 15 },
      { id: 3, title: 'Book 3', description: 'NEET study material for Biology', price: 20 },
      { id: 3, title: 'Book 4', description: 'NEET study material for Biology', price: 20 },
      { id: 3, title: 'Book 5', description: 'NEET study material for Biology', price: 20 },
      { id: 3, title: 'Book 6', description: 'NEET study material for Biology', price: 20 }
  ];

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h4>Orders</h4>
      </div>
      <div className="books-container">
        {books.map(book => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>Price: ${book.price}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
