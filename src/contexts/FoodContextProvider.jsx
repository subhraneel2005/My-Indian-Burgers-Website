import React, { useState } from 'react'
import UseContext from './UseContext'

function FoodContextProvider({children}) {


  const [cart, setCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false)

  const addToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart, item];
      console.log("Cart:", updatedCart); // Log the updated cart
      return updatedCart;
    });
  };

  return (
    <UseContext.Provider value={{cart, addToCart}}>
      {children}
    </UseContext.Provider>
  )
}

export default FoodContextProvider