//React
import React from 'react'
//MongoDB Logo import
import mongodb from './SkillsScreenshots/mongodb_logo.svg'


export default function MongoDB() {
    return (
        <div className='skillCard' id='mongodbCard'>
            <div className='skillName'>
                MongoDB
            </div>
            <img src={mongodb} alt="MongoDB Logo" className='skillLogo'/>
        </div>
    )
}
