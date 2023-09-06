import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import ListadoArticulos from './pages/App'
import Articulo from './pages/Articulo'
import Map from './pages/map'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ 
      backgroundImage: `url("https://giphy.com/clips/storyful-shark-week-mwWeYaKXNQvfO2kR5a")` }}>
      <BrowserRouter>
      <Routes>
        <Route index path='/listadoArticulos' element={<ListadoArticulos />}></Route>
        <Route index path='/Articulo/:articuloId' element={<Articulo />}></Route>
        <Route index path='/' element={<Map/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  </StrictMode>,
) 
