//React
import React from 'react'
//React Logo import
import reactjs from './SkillsScreenshots/reactjs_logo.svg'


export default function ReactJS() {
    return (
        <div className='skillCard' id='reactjsCard'>
            <div className='skillName'>
                React.js
            </div>
            <img src={reactjs} alt="React.js Logo" className='skillLogo'/>
        </div>
    )
}
