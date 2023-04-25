import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './CartContent.css';
import React from 'react'

import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
    const {cart, setCart } = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element)=> element.id === id);

        const newCart = cart.filter((element) => {
          return element !== foundId;
        });

        setCart(newCart);
    };

  return cart.map((product) =>{
    return (
        <div className="cartContent" key={product.id}>
            <img src={product.img} alt='product-card' />
            <h2 className="name">{product.nameProduct}</h2>
            <CartItemCounter product={product} quanty ={product.quanty}/>
            <h3 className="price"> $ {product.price * product.quanty}</h3>
            <h2 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</h2> 
        </div>
      ); 
  });
};

export default CartElements;