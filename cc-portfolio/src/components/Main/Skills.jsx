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
        <div className='border-4 border-black'>
            <h2 className='text-3xl font-bold'>Cody's Skills</h2>
            <div className='flex flex-wrap justify-center'>
                <CPP/>
                <CSS/>
                <Django/>
                <ExpressJS/>
                <Git/>
                <HTML/>
                <JavaScript/>
                <MongoDB/>
                <NodeJS/>
                <Python/>
                <ReactJS/>
                <TailwindCSS/>
            </div>
        </div>
    )
}
