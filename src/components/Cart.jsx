import React, { useContext, useState } from 'react'
import UseContext from '../contexts/UseContext'
import ExploreButton from './ExploreButton';

function Cart() {

    const {cart} = useContext(UseContext);
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    if(cart.length === 0)
    {
      return (
        <div className='bg-slate-700 h-screen w-full flex justify-center items-center flex-wrap gap-5 p-6'>
          <div className='h-[120px] w-[80%] text-xl text-center px-6 py-4 bg-gray-400 rounded-xl flex justify-center items-center'><h1>Your cart is empty bro! <ExploreButton/></h1></div>
        </div>
      )
    }

    else{
  return (
    <div className='h-screen w-full flex justify-center items-center flex-wrap gap-5 p-6'>
     <div className='block'>
      <h1 className='text-2xl text-center font-bold mt-5'>Your Items</h1>
        <h1 className='text-xl text-center font-bold mt-5'>Total Price : ₹{total}</h1>
              {cart.map((item) => (
                  <div className="bg-slate-200 mt-4 rounded-lg overflow-hidden shadow-md cursor-pointer h-[400px] w-[300px]" key={item.id}>
                  <div className="p-4">
                    <img src={item.src} alt="" />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{`₹${item.price}`}</h2>
                    <p className="text-gray-600">{item.deccription}</p>
                  </div>
                </div>
              ))}
      </div>
    </div>
  )}
}

export default Cart