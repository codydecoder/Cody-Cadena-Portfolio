//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'

export default function AERDDietApp() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>AERD Diet App</div>
            <div className='projectDescription'>AERD, or Aspirin Exacerbated Respiratory Disease, is a chronic inflammatory disease that affects around 1.5 million Americans and about 30% of all asthmatics. In recent years(2018) AERD has been found to have it's symptoms relieved by 97% in two weeks if patients follow the Low Omega-6 Diet. This app seeks to compile food and recipe information from numerous scattered sources into one centralized database that stores omega-6 and omega-3 information for each food and recipe.</div>
            <div className='projectImage'>Image</div>
            <Link className='projectGitHub text-gray-700 underline' to='https://github.com/codydecoder/AERD-Diet-App'>GitHub Link</Link>
            <div className='projectSkills'>Skills used</div>

        </div>

    )
}
