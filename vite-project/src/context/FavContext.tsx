

import React, { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";




export const FavContext = createContext<any>(null);



  

  




// console.log(ProductList().length);
export const FavContextProvider = ({ children }: any) => {


 
 




  const {products} = useContext(ProductContext);
  



  const getDefaultedFav = () => {
    
    const defaultFav: any = {};
    for (let i = 1; i <=  products.lenght + 1  ; i++) {
      defaultFav[i] = 0;
    }
    return defaultFav;
  };


 

  // console.log(ProductList().length);
  const [favorite, setFavorite] = useState(getDefaultedFav());


 const addFav = (itemId: number) => {
   setFavorite((prev: Array<number>) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
 };
 
 const removeFav = (itemId: number) => {
   setFavorite((prev: Array<number>) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
 };

  const contextValue = { favorite, addFav, removeFav };

  return (
    <FavContext.Provider value={contextValue}>
      {children}
    </FavContext.Provider>
  );
};