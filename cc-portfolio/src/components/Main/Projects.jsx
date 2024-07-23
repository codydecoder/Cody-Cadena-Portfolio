//React
import React from 'react'
//Project Components
import AERDDietApp from './Projects/AERDDietApp'
import BucketBattles from './Projects/BucketBattles'
import CYCWorkouts from './Projects/CYCWorkouts'
import ParkFinder from './Projects/ParkFinder'
import FoodReactions from './Projects/FoodReactions'
import FurnitureProDotCom from './Projects/FurnitureProDotCom'
import TickIt from './Projects/TickIt'

export default function Projects() {
    return (
        <div className='border-4 border-black space-y-10 rounded-xl p-2 projectsContainer'>
            <div className='text-3xl font-bold'>Projects</div>
            <AERDDietApp/>
            <BucketBattles/>
            <CYCWorkouts/>
            {/* <FoodReactions/> */}
            {/* <FurnitureProDotCom/> */}
            <ParkFinder/>
            {/* <TickIt/> */}

        </div>
    )
}
