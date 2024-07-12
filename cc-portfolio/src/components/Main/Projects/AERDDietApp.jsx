//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'
//Screenshots
import aerd1SS from './ProjectsScreenshots/AERD1SS.png'
import aerd2SS from './ProjectsScreenshots/AERD2SS.png'
import aerd3SS from './ProjectsScreenshots/AERD3SS.png'
import aerd4SS from './ProjectsScreenshots/AERD4SS.png'

export default function AERDDietApp() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>AERD Diet App</div>
            <div className='projectDescription'>AERD, or Aspirin Exacerbated Respiratory Disease, is a chronic inflammatory disease that affects around 1.5 million Americans and about 30% of all asthmatics. In recent years(2018) AERD has been found to have it's symptoms relieved by 97% in two weeks if patients follow the Low Omega-6 Diet. This app seeks to compile food and recipe information from numerous scattered sources into one centralized database that stores omega-6 and omega-3 information for each and every food & recipe.</div>
            <div className='projectImage'>
                <img src={aerd1SS} alt="AERD Screenshot 1" className=''/>
                <img src={aerd2SS} alt="AERD Screenshot 2" className=''/>
                <img src={aerd3SS} alt="AERD Screenshot 3" className=''/>
                <img src={aerd4SS} alt="AERD Screenshot 4" className=''/>
            </div>
            <div className='projectGitHub text-gray-700 underline'><Link to='https://github.com/codydecoder/AERD-Diet-App'>GitHub Link</Link></div>
            <div className='projectSkills'>Skills used</div>

        </div>

    )
}
