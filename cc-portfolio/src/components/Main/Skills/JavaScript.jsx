//React
import React from 'react'
//JavaScript Logo import
import javascript from './SkillsScreenshots/javascript_logo.svg'


export default function JavaScript() {
    return (
        <div className='skillCard' id='javascriptCard'>
            <div className='skillName'>
                JavaScript
            </div>
            <img src={javascript} alt="JavaScript Logo" className='skillLogo'/>
        </div>
    )
}
