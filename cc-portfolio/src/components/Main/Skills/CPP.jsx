//React
import React from 'react'
//C++ Logo import
import cpp from './SkillsScreenshots/cpp_logo.svg'


export default function CPP() {
    return (
        <div className='skillCard' id='cppCard'>
            <div className='skillName'>
                C++
            </div>
            <img src={cpp} alt="C++ Logo" className='skillLogo'/>
        </div>
    )
}
