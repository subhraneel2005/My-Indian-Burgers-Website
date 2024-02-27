import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-87khb5epgzqagutr.us.auth0.com"
  clientId="htLaEy4YfM32zhftFBiCk4O9Q13Om2sw"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
  </Auth0Provider>,
)
