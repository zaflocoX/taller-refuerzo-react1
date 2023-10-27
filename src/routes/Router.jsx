import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import MyComponent from '../components/MyComponent/MyComponent'
import MyCount from '../components/MyCount/MyCount'
import MyProducts from '../components/products/MyProducts'
import Home from '../pages/Home/Home'


const Router = () => {
    return (
        <BrowserRouter basename='/taller-refuerzo-react1'>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='component' element={<MyComponent />} />
                    <Route path='count' element={<MyCount />} />
                    <Route path='products' element={<MyProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router