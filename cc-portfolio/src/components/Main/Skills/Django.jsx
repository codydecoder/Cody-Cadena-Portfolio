//React
import React from 'react'
//C++ Logo import
import django from './SkillsScreenshots/django_logo.svg'


export default function Django() {
    return (
        <div className='skillCard' id='djangoCard'>
            <div className='skillName'>
                Django
            </div>
            <img src={django} alt="Django Logo" className='skillLogo'/>
        </div>
    )
}
