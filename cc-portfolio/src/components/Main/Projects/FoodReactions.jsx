//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function FoodReactions() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>Food Reactions</div>
            <div className='projectDescription'>A food/recipe website using React.</div>
            <div className='projectImage'>Image</div>
            <div className='projectGitHub'>
                <Link className='text-gray-700 underline' to='https://github.com/codydecoder/FoodReactions'>GitHub Link</Link>
            </div>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}