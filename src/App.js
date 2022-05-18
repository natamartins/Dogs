import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login/Login'

import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='login/*' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

