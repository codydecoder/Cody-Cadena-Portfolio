//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function TickIt() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>Tick-iT</div>
            <div className='projectDescription'>Tick-iT is a website created to help people find the venues and events they love at a price that isn't astronomical, or riddled with made-up fees. We will utilize React.js to create our application. We intend to have a header, main, and footer section, with the majority of content populating the main section in a polymorphic manner. The header will contain nav links and a searchbar. Our footer will contain the GitHub links to each group members GitHub account.</div>
            <div className='projectImage'>Image</div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/Tick-iT-FrontEnd'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}