//React
import React from 'react'
//React Router
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
//Components
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import ContactMe from './ContactMe'
import Skills from './Skills'

export default function Main() {
    return (
        <div className='mainContainer mx-auto p-2'>            
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/aboutMe" element={ <AboutMe/> }/>
                    <Route path="/projects" element={ <Projects/> }/>
                    <Route path="/resume" element={ <Resume/> }/>
                    <Route path="/skills" element={ <Skills/> }/>
                    <Route path="/contactMe" element={ <ContactMe/> }/>
            
                </Routes>
        </div>
    )
}
