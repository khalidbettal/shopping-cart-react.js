import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";




export const ProductContext = createContext<any>(null);



export const ProductContextProvider = ({ children }: any) => {

    interface Product {
        id: number;
        name: string;
        price: number;
        image: string;
      }
    
      const [products, setProducts] = useState<Product[]>([]);
    
      const lastProductRef = useRef(products.length);
    
      useEffect(() => {
        lastProductRef.current = products.length;
      }, [products]);


      useEffect(() => {
        axios.get('http://localhost:8000/api/products')
          .then(response => {
            // Handle the response data here
            setProducts(response.data.data);
          })
          .catch(error => {
            // Handle any errors here
            console.error(error);
          });
    
      }, 
      []);
    
    const ProductLenght = lastProductRef.current;


    const contextResult = { products , ProductLenght };
     

    return (
        <ProductContext.Provider value={contextResult}>
          {children}
        </ProductContext.Provider>
      );
    
}
