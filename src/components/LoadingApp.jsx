import React, { useState } from 'react'
import Card from './Card.jsx'

const LoadingApp = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>LoadingApp</h1>
            <button onClick={()=> setShow(!show)}>Ver</button>
            {show &&
            <Card />}
        </div>
    )
}

export default LoadingApp
