
import React, { useContext } from 'react';
import SingleProduct from './items/SingleProduct';
import { FavContext } from '../context/FavContext';
import { ProductContext } from '../context/ProductContext';









/**
 * Renders the Home component.
 * 
 * @returns The JSX element representing the Home component.
 */
function Home(): JSX.Element {
  const { favorite, addFav } = useContext(FavContext);
  const {products} = useContext(ProductContext);

  console.log(products.length);

 
 
  
   

  return (
    <div className='flex flex-wrap justify-center mt-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div className='flex justify-center items-center'>
            <SingleProduct
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;