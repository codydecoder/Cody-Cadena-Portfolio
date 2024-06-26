//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='border-2 border-black flex flex-wrap space-x-16 justify-center mt-2'>
            <Link className='navLinks' to='/aboutMe'>About Me</Link>
            <Link className='navLinks' to='/projects'>Projects</Link>
            <Link className='navLinks' to='/resume'>Resume</Link>
            <Link className='navLinks' to='/contactMe'>Contact Me</Link>
        </nav>

    )
}
