//React
import React from 'react'
//Components
import Headshot from './Headshot'
import Name from './Name'
import Nav from './Nav'

export default function Header() {
    return (
        <div className="headerContainer mx-auto p-2">
            <div className='flex flex-nowrap'>
                <Headshot/>
                <Name/>
            </div>
            <Nav/>
        </div>
    )
}