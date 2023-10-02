
import React, { useContext } from 'react';
import SingleProduct from './items/SingleProduct';
import {PRODUCTS}  from './items/product';
import { FavContext } from '../context/FavContext';



function Home(){
  const {favorite , addFav} = useContext(FavContext);
 console.log(favorite)
    
    return(
          <div className='flex flex-wrap justify-center mt-20'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
    {PRODUCTS.map((product) => (
      
      <div className='flex justify-center items-center'>
        <SingleProduct id={product.id} name={product.name} price={product.price} image={product.image} />
      </div>
      ))}  
    </div>
  </div>
    
    )
}

export default Home;