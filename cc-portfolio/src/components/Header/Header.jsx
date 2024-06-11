//React
import React from 'react'
//Components
import Headshot from './Headshot'
import Name from './Name'
import Nav from './Nav'

export default function Header() {
    return (
        <div className="mx-auto bg-gray-400 p-2">
            <div className='flex flex-wrap'>
                <Headshot/>
                <Name/>
            </div>
            <Nav/>
        </div>
    )
}