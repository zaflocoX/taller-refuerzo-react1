import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Navbar = () => {
    const links = [
        
        {
            id: 1,
            label: 'Componente',
            link: '/component'
        },
        {
            id: 2,
            label: 'Contador',
            link: '/count'
        },
        {
            id: 3,
            label: 'Products',
            link: '/products'
        }

    ]

    return (
        <nav className='nav-wrapper'>{
            links.map(item => <NavLink className='nav-links' key={item.id} to={item.link}>{item.label}</NavLink>)
        }</nav>
    )
}

export default Navbar