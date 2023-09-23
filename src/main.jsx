import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListadoArticulos from './pages/App'
import Articulo from './pages/Articulo'
import Map from './pages/map'
import Layout from './components/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ 
      backgroundImage: `url("https://giphy.com/clips/storyful-shark-week-mwWeYaKXNQvfO2kR5a")` }}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Map/>} />
          <Route path='/listadoArticulos' element={<ListadoArticulos />} />
          <Route path='/Articulo/:articuloId' element={<Articulo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  </StrictMode>,
) 
