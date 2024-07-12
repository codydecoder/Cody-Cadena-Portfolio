//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'
//Screenshots
import cyc1SS from './ProjectsScreenshots/CYC1SS.png'
import cyc2SS from './ProjectsScreenshots/CYC2SS.png'
import cyc3SS from './ProjectsScreenshots/CYC3SS.png'
import cyc4SS from './ProjectsScreenshots/CYC4SS.png'
import cyc5SS from './ProjectsScreenshots/CYC5SS.png'
import cyc6SS from './ProjectsScreenshots/CYC6SS.png'

export default function CYCWorkouts() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>CYC Workouts</div>
            <div className='projectDescription'>We wanted to make a project that lets users create an account, sign in, create an exercise for anything they could possibly imagine and then build a workout plan to also fit that workout dream.</div>
            <div className='projectImage'>
                <img src={cyc1SS} alt="CYC Workouts Screenshot 1" className=''/>
                <img src={cyc2SS} alt="CYC Workouts Screenshot 2" className=''/>
                <img src={cyc3SS} alt="CYC Workouts Screenshot 3" className=''/>
                <img src={cyc4SS} alt="CYC Workouts Screenshot 4" className=''/>
                <img src={cyc5SS} alt="CYC Workouts Screenshot 5" className=''/>
                <img src={cyc6SS} alt="CYC Workouts Screenshot 6" className=''/>
            </div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/CYC-Workouts'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}