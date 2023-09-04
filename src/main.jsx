import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListadoArticulos from './pages/App'
import Articulo from './pages/Articulo'

const routes = createBrowserRouter([{
  path: '/',
  element: <ListadoArticulos/>
},{
  path: '/Articulo',
  element: <Articulo/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
) 
