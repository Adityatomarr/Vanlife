import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './components/Navbar'
import Vans from './Vans'
import VanDetail from './VanDetail'
import './App.css'
import "./server"

function App() {

  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/about' Component={About}/>
        <Route path='/vans' Component={Vans}/>
        <Route path='/vans/:id' Component={VanDetail}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
