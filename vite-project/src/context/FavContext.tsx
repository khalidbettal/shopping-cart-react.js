import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../components/items/product";


export const FavContext = createContext<any>(null);

const getDefaultedFav = () : any =>{
   let fav:any = {};
   for (let i = 1; i <= PRODUCTS.length + 1; i++) {
      fav[i] = 0;
   }
    return fav;
}

export const FavContextProvider = (props:any) => {
  const [favorite, setFavorite] = useState<any>( getDefaultedFav() );

  const addFav = (itemId: number) => {
    return setFavorite((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
  };

    const removeFav = (itemId: number) => {
      return  setFavorite((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {favorite, addFav, removeFav};

  //  console.log(favorite)

  return (
    <FavContext.Provider value={ contextValue }>
      {props.children}
    </FavContext.Provider>
  );
}