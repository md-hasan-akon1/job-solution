import { useState } from 'react'

import './App.css'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="mx-4  lg:mx-24">
    <Header></Header>
    <ToastContainer></ToastContainer>
    <Outlet></Outlet>
      
    </div>
  )
}

export default App
