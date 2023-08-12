import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements, Route,  } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Vans,{loader as vansLoader} from './Vans'
import VanDetail, {loader as vanDetailLoader} from './VanDetail'
import './App.css'
import "./server"
import Layout from './components/Layout'
import Dashboard from './host/Dashboard'
import HostLayout from './components/HostLayout'
import Income from './host/Income'
import Reviews from './host/Reviews'
import HostVans , {loader as hostVansLoader} from './host/hostVans'
import HostVansDetailsLayout , {loader as hostVansDetailsLayoutLoader} from './host/HostVansDetailsLayout'
import HostVanDetails from './host/HostVanDetails'
import HostVanPricing from './host/HostVanPricing'
import HostVanPhotos from './host/HostVanPhotos'
import Error from './components/Error'
import Login from './Login'
import { requireAuth } from './util'
import { redirect } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path ='login' element={<Login/>}/>
          <Route path='vans' element={<Vans /> } errorElement={<Error/>} loader={vansLoader}/>
          <Route path='vans/:id' element={<VanDetail/>} loader={vanDetailLoader}/>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}  loader={async ()=> await requireAuth()}/>
            <Route path ='income' element={<Income/>}  loader={async ()=> await requireAuth()} />              
            <Route path ='reviews' element={<Reviews/>}  loader={async ()=> await requireAuth()}/>              
            <Route path ='vans' element={<HostVans/>} loader={hostVansLoader}/>
            <Route path='vans/:id' element={<HostVansDetailsLayout/>} loader={hostVansDetailsLayoutLoader}>
              <Route index element={<HostVanDetails/>} loader={async ()=> await requireAuth()}/>
              <Route path='pricing' element={<HostVanPricing/>} loader={async ()=> await requireAuth()}/>
              <Route path='photos' element={<HostVanPhotos/>} loader={async ()=> await requireAuth()}/>
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
