import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'
import Navbar from './components/Navbar'
import Vans from './components/Vans'

function App() {

  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/about' Component={About}/>
        <Route path='/vans' Component={Vans}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
