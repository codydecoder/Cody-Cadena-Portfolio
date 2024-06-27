//React
import React from 'react'
//Contact Me Form
import { ContactMeForm } from './Form'

export default function ContactMe() {
    return (
        <div className='border-4 border-black p-4'>
            <div className='text-3xl font-bold'>Contact Me</div>
            <div>Location: Dallas, TX</div>
            <div>LinkedIn: <a href='https://www.linkedin.com/in/codycadena/'/><span className='text-blue-500 underline'>Cody Cadena</span></div>
            <div>GitHub: <a href='https://github.com/codydecoder'/><span className='text-gray-700 underline'>Cody Cadena</span></div>
            
            <div className='mt-4'>
                <ContactMeForm/>
            </div>
        </div>
    )
}
