import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements, Route,  } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Vans,{loader as vansLoader} from './Vans'
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
import Error from './components/Error'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans /> } errorElement={<Error/>} loader={vansLoader}/>
          <Route path='vans/:id' element={<VanDetail/>}/>j
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
          <Route path='*' element={<Error/>}/>
        </Route>
  ))

  return(
    <RouterProvider router={router}/>
  )
}

export default App
