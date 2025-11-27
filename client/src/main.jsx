import React, { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'




const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
}) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider> 
  </React.StrictMode>,
)
