import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Vans from './Vans'
import VanDetail from './VanDetail'
import './App.css'
import "./server"
import Layout from './components/Layout'
import Dashboard from './host/Dashboard'
import HostLayout from './components/HostLayout'
import Income from './host/Income'
import Reviews from './host/Reviews'
import HostVans from './host/hostVans'
import HostVansDetailsLayout from './host/HostVansDetailsLayout'
import HostVanDetails from './host/HostVanDetails'
import HostVanPricing from './host/HostVanPricing'
import HostVanPhotos from './host/HostVanPhotos'





function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans/>}/>
          <Route path='vans/:id' element={<VanDetail/>}/>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path ='income' element={<Income/>}/>              
            <Route path ='reviews' element={<Reviews/>}/>              
            <Route path ='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVansDetailsLayout/>}>
              <Route index element={<HostVanDetails/>}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>      
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
