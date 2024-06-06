//React
import React from 'react'
//Components
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import ContactMe from './ContactMe'

export default function Main() {
    return (
        <div className='mx-auto bg-gray-300 p-2'>
            <h1>MAIN</h1>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <ContactMe/>
        </div>
    )
}
