import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/home/Home'

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