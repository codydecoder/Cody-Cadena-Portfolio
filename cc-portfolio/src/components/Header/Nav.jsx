//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='border-b-2 border-red-800 flex flex-nowrap items-center space-x-16 justify-center mt-2'>
            <Link className='navLinks text-nowrap' to='/aboutMe'>About Me</Link>
            <Link className='navLinks' to='/projects'>Projects</Link>
            <Link className='navLinks' to='/resume'>Resume</Link>
            <Link className='navLinks text-nowrap' to='/contactMe'>Contact Me</Link>
        </nav>

    )
}
