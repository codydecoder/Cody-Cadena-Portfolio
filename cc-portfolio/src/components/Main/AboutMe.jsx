import React from 'react'

export default function AboutMe() {
    return (
        <div className='aboutMeContainer leading-5 p-2'>
            <div className='aboutMeP1 flex flex-wrap border-2 border-black p-2'>
                
                <div className='text-center w-5/12 p-1'>As a Software Engineer and Full-Stack Developer, I'm driven by a relentless pursuit of excellence in crafting digital creations that blend functionality with artistry. With expertise in JavaScript, Python, React.js, and Django, I specialize in building innovative solutions that make a meaningful impact.</div>
            </div>
            <div className='aboutMeP2 flex flex-wrap border-2 border-black p-2'>
                <div className='text-justify w-7/12 p-1'>My journey includes immersive training at General Assembly's Software Engineering Bootcamp, where I cultivated a deep understanding of modern technologies. I'm particularly proud of developing the AERD Diet App, which aids individuals suffering from AERD in managing their symptoms. At MDC Inc, I transformed organizational systems, showcasing my technical prowess and creativity.</div>           
                <img className='object-contain w-5/12' src='https://www.unt.edu/sites/default/files/20_0157_campus-beauty55_700.jpg' alt="General Assembly Campus"/>
            </div>
            <div className='aboutMeP3 flex flex-wrap border-2 border-black p-2'>
                
                <div className='text-center w-7/12 p-1'>Beyond code, I find inspiration in the great outdoors, exploring the immensity of nature through travel, camping, and hiking. As an avid sports enthusiast, I enjoy all competitive pursuits with basketball and MMA being my favorites. My passion for literature, cinema, and diverse cultures fuels my creativity and broadens my perspective.</div>
            </div>
            <div className='aboutMeP4 flex flex-wrap border-2 border-black p-2'>
                
                <div className='text-center'>With a keen eye for detail and a hunger for innovation, I approach each project with dedication and artistry. Let's connect and collaborate to push the boundaries of what's possible in the digital landscape.</div>
            </div>
        </div>
    )
}
