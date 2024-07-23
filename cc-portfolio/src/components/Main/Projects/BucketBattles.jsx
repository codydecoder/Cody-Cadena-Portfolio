//React
import React from 'react'
//React Router
import { Link } from 'react-router-dom'
//Screenshots
import bb1SS from './ProjectsScreenshots/BB1SS.png'
import bb2SS from './ProjectsScreenshots/BB2SS.png'
import bb3SS from './ProjectsScreenshots/BB3SS.png'
import bb4SS from './ProjectsScreenshots/BB4SS.png'
//Skills
import CSS from '../Skills/CSS'
import ExpressJS from '../Skills/ExpressJS'
import Git from '../Skills/Git'
import HTML from '../Skills/HTML'
import JavaScript from '../Skills/JavaScript'
import MongoDB from '../Skills/MongoDB'
import NodeJS from '../Skills/NodeJS'
import ReactJS from '../Skills/ReactJS'
import TailwindCSS from '../Skills/TailwindCSS'

export default function BucketBattles() {
    return (
        <div className='border-black border-2 projectCard'>
            <div className='projectTitle'>Bucket Battles</div>
            <div className='projectDescription'>Tired of listening to terrible analysts and washed-up 6th men explain basketball? Now's your chance to join bucket battles and see how your picks stack up against the "experts". My intention was to create a website that allows users to choose who they think will win basketball games and if they are correct they gain experience and form, and if they are not correct they lose form but gain experience.</div>
            <div className='projectImage'>
                <img src={bb1SS} alt="Bucket Battles Screenshot 1" className=''/>
                <img src={bb2SS} alt="Bucket Battles Screenshot 2" className=''/>
                <img src={bb3SS} alt="Bucket Battles Screenshot 3" className=''/>
                <img src={bb4SS} alt="Bucket Battles Screenshot 4" className=''/>
            </div>
            <div className='projectGitHub'>
                <Link className='text-gray-700 underline' to='https://github.com/codydecoder/bucketBattles'>GitHub Link</Link>
            </div>
            <div className='projectSkills'>
                <HTML/>
                <CSS/>
                <JavaScript/>
                <MongoDB/>
                <ExpressJS/>
                <ReactJS/>
                <NodeJS/>
                <TailwindCSS/>
                <Git/>
            </div>
        </div>

    )
}