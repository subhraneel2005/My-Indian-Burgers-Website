import React, { useContext, useEffect, useState } from 'react'
import AllData from '../MyData/AllData';
import NavBara from './NavBara';
import UseContext from '../contexts/UseContext';

function Explore() {

  const {cart, addToCart} = useContext(UseContext);

  return (
    <>
    <NavBara cartLength = {cart.length}/>
    <div className="bg-white h-screen w-full select-none">
      <div className="container mx-auto px-4 py-8">
        <div className='flex flex-wrap justify-between'>
            <div className='block'>
                <p className="text-xl text-gray-600 mb-12">Welcome to My E-Resturant</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {AllData.map((item) =>(

             
             <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md cursor-pointer"
            
            key={item.id}
             >
             <div className="p-4">
              <img src={item.src} alt="" />
               <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
               <h2 className="text-xl font-semibold text-gray-800 mb-2">{`₹${item.price}`}</h2>
               <p className="text-gray-600">{item.deccription}</p>
               <div className='flex justify-between px-3'>
                 <button 
                 onClick={() => addToCart(item)}
                 className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                    Add to Cart
                 </button>
               </div>
             </div>
           </div>
           
          ))}
        </div>
      </div>

    </div>
    </>
  )
}

export default Explore