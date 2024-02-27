import React from 'react'
import HomeButton from './HomeButton';
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function NavBara({cartLength}) {

    const { loginWithRedirect, isAuthenticated, logout} = useAuth0();

    const navigate = useNavigate();

    let cartRoute = '/yourCart';

  return (
    <div className='flex justify-evenly px-5 py-3 bg-slate-500 w-full fixed'>
        <HomeButton/>

        {isAuthenticated ? (<button className='select-none text-red-300 bg-red-600 px-3 py-2 font-semibold md:text-lg text-sm rounded-lg' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) : (<button className='select-none bg-lime-800 text-lime-300 px-3 py-2 font-semibold text-lg rounded-lg' onClick={() => loginWithRedirect()}>Log In</button>)}
        
        <h1 className='text-slate-200 font-bold text-lg md:text-2xl bg-slate-700 rounded-xl cursor-pointer py-1 px-3' 
        onClick={() => navigate(cartRoute)}>Cart : {cartLength}</h1>
    </div>
  )
}

export default NavBara