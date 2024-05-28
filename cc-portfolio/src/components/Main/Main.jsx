//React
import React from 'react'
//Components
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

export default function Main() {
    return (
        <div>
            <h1>MAIN</h1>
            <AboutMe/>
            <Projects/>
            <ContactMe/>
        </div>
    )
}
