//React
import React from 'react'
//Git Logo import
import git from './SkillsScreenshots/git_logo.svg'


export default function Git() {
    return (
        <div className='skillCard' id='gitCard'>
            <div className='skillName'>
                Git
            </div>
            <img src={git} alt="Git Logo" className='skillLogo'/>
        </div>
    )
}
