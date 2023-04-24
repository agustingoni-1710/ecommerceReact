import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Products.css';
import React from 'react'

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);    
    
    
    return data.map((product) =>{
        return(
            <div className="card" key={product.id}>
                <img className="img" src={product.img} alt="img-product-card" />
                <h2>{product.nameProduct}</h2>
                <h3>{product.price}$</h3>
                <button onClick={() => buyProducts(product)}>Comprar</button>
            </div>
        )
    })
    
}

export default Products