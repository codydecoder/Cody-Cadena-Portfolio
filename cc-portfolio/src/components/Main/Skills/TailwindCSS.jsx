//React
import React from 'react'
//TailwindCSS Logo import
import tailwindcss from './SkillsScreenshots/tailwindcss_flogo.svg'


export default function TailwindCSS() {
    return (
        <div className='skillCard' id='tailwindcssCard'>
            <div className='skillName'>
                TailwindCSS
            </div>
            <img src={tailwindcss} alt="TailwindCSS Logo" className='skillLogo'/>
        </div>
    )
}
