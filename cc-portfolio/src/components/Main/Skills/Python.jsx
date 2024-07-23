//React
import React from 'react'
//Python Logo import
import python from './SkillsScreenshots/python_logo.svg'


export default function Python() {
    return (
        <div className='skillCard' id='pythonCard'>
            <div className='skillName'>
                Python
            </div>
            <img src={python} alt="Python Logo" className='skillLogo'/>
        </div>
    )
}
