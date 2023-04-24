import React from 'react'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Navbar from '../Navbar/Navbar';

const CartContent = () => {
  const {cart} = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements/>
          <CartTotal/>
        </>
      ) : (
        <h2 className='cart-message-center'>El carrito esta vacio</h2>
      )}
    </>
  );
}
export default CartContent;