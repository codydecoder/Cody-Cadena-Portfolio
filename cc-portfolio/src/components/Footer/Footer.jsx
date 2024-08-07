//React
import React from 'react'
//Components
import GitHubProject from './GitHubProject'
import LinkedIn from './LinkedIn'
import GitHubProfile from './GitHubProfile'

export default function Footer() {
    return (
        <div className='footerContainer mx-auto p-2'>
            <div className='flex flex-wrap justify-between px-10'>
                <GitHubProject/>
                <LinkedIn/>
                <GitHubProfile/>
            </div>
        </div>
    )
}
