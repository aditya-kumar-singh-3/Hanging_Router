import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/Login';
import About from './Component/About'; 

import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import User from './Component/User';



function App() {
        const router = createBrowserRouter([
          {
            path: "/",
            element: <><Navbar/><Home/></>
          },
          {
            path:"/login",
            element :<><Navbar/><Login/></>
          },
          {
            path : "/about",
            element : <><Navbar/><About/></>
          },
          {
            path: "/user/:username",
            element : <><Navbar/><User/></>
          }
        ])  

  return (
    <>
  
   <RouterProvider router={router}/>
    </>
  )
}

export default App
