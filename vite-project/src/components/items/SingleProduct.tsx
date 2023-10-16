
import React, { useContext, useState } from 'react';
import { FavContext } from '../../context/FavContext';
import { BlackHeart, WhitekHeart } from '../items/tools/tools';
import { Button } from "@material-tailwind/react";


type Props = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const SingleProduct = ({ id, name, price, image }: Props): JSX.Element => {

    const { addFav, favorite } = useContext(FavContext);
    const [turn, setTurn] = useState<boolean>(false);

    const favAmount: number = favorite[id];

    return (
        <div>
            <div className="relative  xs:max-sm:min-w-[360px] min-w-[300px] md:min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div className="overflow-x-hidden rounded-2xl relative">
                    <img className="h-40 rounded-2xl w-full object-cover" src={image} />
                    <a href="/cart">
                        <p className="absolute right-2 top-2  rounded-full p-2 cursor-pointer group bg-cyan-300 text-center">
                            <span className='text-xs bg-yellow-400 p-1.5 rounded-full font-semibold'>{favAmount > 0 ? favAmount : 0} +</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </p>
                    </a>
                </div>
                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                        <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
                        <p className="text-md text-gray-800 mt-0">${price}</p>
                    </div>
                    <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        <button>
                            {turn ? BlackHeart() : WhitekHeart()}
                        </button>
                    </div>
                </div>
                <div className='text-center lg:text-sm absolute sm:right-24 sm:-bottom-5 '>
                    <Button onClick={() => addFav(id)} color="green">color green</Button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;