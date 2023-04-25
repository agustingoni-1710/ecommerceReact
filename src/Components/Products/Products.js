import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Products.css';
import React from 'react'


const Products = () => {
    const { buyProducts, search, searcher, results } = useContext(dataContext);    
    
    

    return (
        <div>
            <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"/>

            <div>
                {results.map((product) => 
                     <div className="card" key={product.id}>
                        <img className="img" src={product.img} alt="img-product-card" />
                        <h2>{product.nameProduct}</h2>
                        <h3> $ {product.price}</h3>
                        <h5>Categoria : {product.category}</h5>
                        <button onClick={() => buyProducts(product)}>Comprar</button>
                 </div>
                )}
            </div>
        </div>
    )
    
    /* data.map((product) =>{   
        return(
            <>
                
               <div className="card" key={product.id}>
                    <img className="img" src={product.img} alt="img-product-card" />
                    <h2>{product.nameProduct}</h2>
                    <h3> $ {product.price}</h3>
                    <button onClick={() => buyProducts(product)}>Comprar</button>
                </div>
            
            </>
        )
    }) */
    
}

export default Products