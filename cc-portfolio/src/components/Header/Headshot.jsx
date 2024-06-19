//React
import React from 'react'
//Picture import
import headshot from './Headshot.jpg'

export default function Headshot() {
    return (
        <div className='w-1/5 p-2'>
            <img src={headshot} alt="Cody Cadena Headshot" className='rounded-full w-28 h-28'/>
        </div>
    )
}
