//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'
//Screenshots
import pf1SS from './ProjectsScreenshots/PF1SS.png'
import pf2SS from './ProjectsScreenshots/PF2SS.png'

export default function ParkFinder() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>ParkFinder</div>
            <div className='projectDescription'>This program will help you plan out your trips to national parks by finding all the parks near you. This program will search for parks near a location that you enter.</div>
            <div className='projectImage'>
                <img src={pf1SS} alt="ParkFinder Screenshot 1" className=''/>
                <img src={pf2SS} alt="ParkFinder Screenshot 2" className=''/>
            </div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/ParkFinder'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}