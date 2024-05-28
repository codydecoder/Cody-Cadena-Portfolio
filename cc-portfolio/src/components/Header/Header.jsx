//React
import React from 'react'
//Components
import Headshot from './Headshot'
import Name from './Name'
import Nav from './Nav'

export default function Header() {
    return (
        <div>
            <h1>
                HEADER
            </h1>
            <Headshot/>
            <Name/>
            <Nav/>
        </div>
    )
}