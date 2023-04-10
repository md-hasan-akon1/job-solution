import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="mx-4  lg:mx-24">
    <Header></Header>
    <Outlet></Outlet>
      
    </div>
  )
}

export default App
