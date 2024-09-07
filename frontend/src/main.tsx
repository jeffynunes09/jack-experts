
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home/index.tsx'
import './index.css'
import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register/index.tsx'

const router = createBrowserRouter([
  {
    
  path: "/",
    element:<App/>},
  
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/dashboard",
        element: <Home/>
      }
    
  
 
]);





createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
