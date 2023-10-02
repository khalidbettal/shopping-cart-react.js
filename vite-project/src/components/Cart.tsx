
import { useContext } from "react";
import CartProduct from "./items/CartProduct";
import { PRODUCTS } from "./items/product";
import { FavContext } from "../context/FavContext";





export const Cart = () =>{
    const {favorite , addFav} = useContext(FavContext);
           
    return(
        <>
         <h1 className='text-center text-4xl mt-10'> Your Cart Product</h1>
        
               <div className='flex flex-wrap justify-center mt-20'>
  <div className='grid grid-cols-1  gap-4'>
  {PRODUCTS.map((product) => {
    
            const value = favorite[product.id] !== 0;
        
        if(value){
            return (
                <div className='flex justify-center items-center'>
                <CartProduct id={product.id} name={product.name} price={product.price} image={product.image} />
              </div>
            );
          }
  
    
        })}
    
  </div>
</div>
        </>
      
  
  );
}

