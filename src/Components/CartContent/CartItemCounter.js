import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product}) => {

  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = () => {
    
    const productrepeat = cart.find((item) => item.id === product.id);
    
    if (productrepeat.quanty !== 1 )
      setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty:productrepeat.quanty - 1} : item)));

  }

  return (
    <>
      <p className='conunter-button'onClick={decrese}>➖</p>
      <p>{product.quanty}</p>
      <p className='conunter-button' onClick={()=> buyProducts(product)}>➕</p>
    </>
  )
}

export default CartItemCounter