//React
import React from 'react'
//Contact Me Form
import { ContactMeForm } from './Form'

export default function ContactMe() {
    return (
        <div className='p-4'>
            <div className='text-4xl font-bold underline'>Contact Me</div>
            <div className='text-xl'>Location: Dallas, TX</div>
            <div className='text-xl'>LinkedIn: <a href='https://www.linkedin.com/in/codycadena/'/><span className='text-blue-500 underline'>Cody Cadena</span></div>
            <div className='text-xl'>GitHub: <a href='https://github.com/codydecoder'/><span className='text-gray-700 underline'>Cody Cadena</span></div>
            
            <div className='mt-4'>
                <ContactMeForm/>
            </div>
        </div>
    )
}
