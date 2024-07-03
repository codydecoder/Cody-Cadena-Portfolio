//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function BucketBattles() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>Bucket Battles</div>
            <div className='projectDescription'>Tired of listening to terrible analysts and washed-up 6th men explain basketball? Now's your chance to join bucket battles and see how your picks stack up against the "experts". My intention was to create a website that allows users to choose who they think will win basketball games and if they are correct they gain experience and form, and if they are not correct they lose form but gain experience.</div>
            <div className='projectImage'>Image</div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/bucketBattles'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>
        </div>

    )
}