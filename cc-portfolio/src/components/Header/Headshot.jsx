//React
import React from 'react'
//Picture import
import headshot from './Headshot.jpeg'

export default function Headshot() {
    return (
        <div className='w-1/5 p-2'>
            <img src={headshot} alt="Cody Cadena Headshot" className='rounded-full w-36 h-36 border-2 border-black'/>
        </div>
    )
}
