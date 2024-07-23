//React
import React from 'react'
//CSS Logo import
import css from './SkillsScreenshots/css3_logo.svg'


export default function CSS() {
    return (
        <div className='skillCard' id='cssCard'>
            <div className='skillName'>
                CSS
            </div>
            <img src={css} alt="CSS Logo" className='skillLogo'/>
        </div>
    )
}
