import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
  };

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='cart-contain'>
      <div className="cart-container">
        <h2 className="cart-header">Cart</h2>
        {currentItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Book Name</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
              </button>
              {Array.from({ length: Math.ceil(cartItems.length / ITEMS_PER_PAGE) }, (_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={currentPage === Math.ceil(cartItems.length / ITEMS_PER_PAGE)}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
