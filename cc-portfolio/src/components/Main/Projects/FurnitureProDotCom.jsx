//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function FurnitureProDotCom() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>Furniture Pro Dot Com</div>
            <div className='projectDescription'>Furniture department store project - Mongoose/Express MongoDB and Axios project with group</div>
            <div className='projectImage'>Image</div>
            <div className='projectGitHub'>
                <Link className='text-gray-700 underline' to='https://github.com/codydecoder/furnitureProDotCom'>GitHub Link</Link>
            </div>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}