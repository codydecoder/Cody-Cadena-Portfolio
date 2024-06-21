import React from 'react'

export default function ContactMe() {
    return (
        <div className='border-4 border-black p-4'>
            <h2>Contact Me</h2>
            <div>Location: Dallas, TX</div>
            <div className=''>LinkedIn: <a href='https://www.linkedin.com/in/codycadena/'/><span className='text-blue-500 underline'>Cody Cadena</span></div>
            <div>GitHub: <a href='https://github.com/codydecoder'/><span className='text-gray-700 underline'>Cody Cadena</span></div>
            <div>Email: <a href='mailto:codycad1@proton.me' title='Email me'/><span className='text-purple-600 underline'>codycad1@proton.me</span></div>
            <div>Phone: (210)992-2002</div>

        </div>
    )
}
