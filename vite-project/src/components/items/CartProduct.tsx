
import React, { useContext, useState } from 'react';
import { BlackHeart, WhitekHeart } from '../items/tools/tools';
import { Button } from "@material-tailwind/react";
import { FavContext } from '../../context/FavContext';


type data = {
    id: number;
    name: string;
    price: number;
    image: string;
}

 export const CartProduct = ({id, name, price, image}: data) => {

    const [turn, setTurn] = useState<Boolean>(false);
    const {favorite, addFav} = useContext(FavContext);


    const changeTurn = (Id: number) => {
        setTurn(!turn);
        
        
    }
   
    
    return (
        <div>
            

            <div className="relative  xs:max-sm:min-w-[360px] min-w-[300px] md:min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src={ image}/>
    
        
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
          <p className="text-md text-gray-800 mt-0">{price}</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          
          <button >
            {turn ? BlackHeart() : WhitekHeart()}
          
          </button>
          
          
        </div>
        
      </div>
      <div className='text-center lg:text-sm absolute sm:right-24 sm:-bottom-5 '>
      <Button onClick={() => changeTurn(id)}
      color="green">color green</Button>
      </div>
    </div>
    

        </div>
    );
}

export default CartProduct;