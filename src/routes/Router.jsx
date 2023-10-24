import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import MyComponent from '../components/MyComponent/MyComponent'
import MyCount from '../components/MyCount/MyCount'
import MyProducts from '../components/products/MyProducts'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/component' element={<MyComponent />} />
                <Route path='/count' element={<MyCount />} />
                <Route path='/products' element={<MyProducts />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router