import React from 'react'
import { useState } from 'react';
import './styles.scss'

const MyCount = () => {
    const [count, setCount] = useState(0)

    return (
        <>  
        
        <div className='count-title'>
            <h1>Componente Contador</h1>
        </div>
            <div className="count-text">
            <p>Usted tiene {count} clic realizados</p>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count - 1)}> - </button>
            </div>
            
        </>
    )
}

export default MyCount