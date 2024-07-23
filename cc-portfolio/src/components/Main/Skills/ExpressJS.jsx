//React
import React from 'react'
//Express Logo import
import expressjs from './SkillsScreenshots/expressjs_logo.svg'


export default function ExpressJS() {
    return (
        <div className='skillCard' id='expressjsCard'>
            <div className='skillName'>
                Express.js
            </div>
            <img src={expressjs} alt="Express.js Logo" className='skillLogo'/>
        </div>
    )
}
