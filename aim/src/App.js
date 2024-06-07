

import React, { useState } from 'react'
import './App.css'
import Login from './store/Login'
import Root from './store/Root'
import SignUp from './store/SignUp'
//import Found from './store/Found'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Welcome from './store/Welcome';

import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {

  const [currentuser,setcurrentuser]=useState('');
  const handle=(user)=>{
    setcurrentuser(user)
  }
  const handlelogout=(user)=>{
    setcurrentuser('');
  }


  const router =createBrowserRouter([
    {path:'/',element:<Root/>, children:[
        {path:'/',element:<SignUp/>},
        {path:'/login',element :<Login onClick={handle}/>},
        {path:'/welcome',element:<Welcome OnUser={currentuser} onLogout={handlelogout}/>},
        
        
    ]
  }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
      
      
      
      
      
      
      
    </div>
  )
}

export default App

