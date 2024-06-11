import React from 'react'

import headshot from './Headshot.jpg'

export default function Headshot() {
    return (
        <div className='w-1/5 p-2'>
            <img src={headshot} alt="Cody Cadena Headshot" className='rounded-full w-36 h-36'/>
        </div>
    )
}
