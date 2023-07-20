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



function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path='/' Component={Home}/>
          <Route path='/host' Component={Dashboard}/>
          <Route path='/about' Component={About}/>
          <Route path='/vans' Component={Vans}/>
          <Route path='/vans/:id' Component={VanDetail}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
