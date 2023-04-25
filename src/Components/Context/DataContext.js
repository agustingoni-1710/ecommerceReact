import { createContext, useState, useEffect } from "react"
import axios from "axios";


export const dataContext = createContext();

const DataProvider = ({ children }) =>{

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch ] = useState("");

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    },[]);

    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id);
        if(productrepeat){
            setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty:productrepeat.quanty + 1} : item)));
        }else{
            setCart([...cart, product]);
        }
        
    };

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target)
    }



    
   const results = !search ? data : data.filter((item)=> item.nameProduct.toLowerCase().includes(search.toLocaleLowerCase()))


    return(
        <>
            {/* <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"/>
            <tbody>
                {
                    results.map ((item) => (
                        <tr key={item.id}>
                            <td>{item.nameProduct}</td>
                            <td> $ {item.price}</td>
                            
                        </tr>
                    ))
                }
            </tbody> */}
            <dataContext.Provider value={{data, cart, setCart, buyProducts, search, setSearch, searcher, results}}>
                {children}
            </dataContext.Provider>
        </>

    )
};


export default DataProvider; 