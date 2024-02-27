import React from 'react'
import LandingPage from './components/LandingPage'
import FoodContextProvider from './contexts/FoodContextProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './components/Explore'
import LearnMore from './components/LearnMore'
import Cart from './components/Cart'

function App() {
  return (
    <FoodContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/learnMore" element={<LearnMore/>} />
          <Route path="/yourCart" element={<Cart/>} />
        </Routes> 
      </BrowserRouter>
    </FoodContextProvider>
  )
}

export default App