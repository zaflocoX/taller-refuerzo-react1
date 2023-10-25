import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home/Home'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Home />
    </div>
  )
}

export default Layout