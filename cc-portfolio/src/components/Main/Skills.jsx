//React
import React from 'react'
//Component Imports
import CPP from './Skills/CPP'
import CSS from './Skills/CSS'
import Django from './Skills/Django'
import ExpressJS from './Skills/ExpressJS'
import Git from './Skills/Git'
import HTML from './Skills/HTML'
import JavaScript from './Skills/JavaScript'
import MongoDB from './Skills/MongoDB'
import NodeJS from './Skills/NodeJS'
import Python from './Skills/Python'
import ReactJS from './Skills/ReactJS'
import TailwindCSS from './Skills/TailwindCSS'

export default function Skills() {
    return (
        <div className=''>
            <h2 className='underline text-3xl font-bold p-2'>Cody's Skills</h2>
            <div className='allSkillsContainer'>
                <HTML/>
                <CSS/>
                <JavaScript/>
                <MongoDB/>
                <ExpressJS/>
                <ReactJS/>
                <NodeJS/>
                <TailwindCSS/>
                <Python/>
                <Django/>
                <Git/>               
                <CPP/>
            </div>
        </div>
    )
}
