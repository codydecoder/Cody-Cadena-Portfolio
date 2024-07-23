//React
import React from 'react'
//HTML Logo import
import html from './SkillsScreenshots/html5_logo.svg'


export default function HTML() {
    return (
        <div className='skillCard' id='htmlCard'>
            <div className='skillName'>
                HTML5
            </div>
            <img src={html} alt="HTML5 Logo" className='skillLogo'/>
        </div>
    )
}
