//React
import React from 'react'
//Components
import GitHubProject from './GitHubProject'
import LinkedIn from './LinkedIn'
import GitHubProfile from './GitHubProfile'

export default function Footer() {
    return (
        <div>
            <h1>FOOTER</h1>
            <GitHubProject/>
            <LinkedIn/>
            <GitHubProfile/>
        </div>
    )
}
