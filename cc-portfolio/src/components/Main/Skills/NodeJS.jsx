//React
import React from 'react'
//Node.js Logo import
import nodejs from './SkillsScreenshots/nodejs_logo.svg'


export default function NodeJS() {
    return (
        <div className='skillCard' id='nodejsCard'>
            <div className='skillName'>
                Node.js
            </div>
            <img src={nodejs} alt="Node.js Logo" className='skillLogo'/>
        </div>
    )
}
