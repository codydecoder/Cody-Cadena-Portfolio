//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function CYCWorkouts() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>CYC Workouts</div>
            <div className='projectDescription'>We wanted to make a project that lets users create an account, sign in, create an exercise for anything they could possibly imagine and then build a workout plan to also fit that workout dream.</div>
            <div className='projectImage'>Image</div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/CYC-Workouts'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}