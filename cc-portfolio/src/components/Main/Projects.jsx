//React
import React from 'react'
//Project Components
import AERDDietApp from './Projects/AERDDietApp'
import BucketBattles from './Projects/BucketBattles'
import CYCWorkouts from './Projects/CYCWorkouts'
import FoodReactions from './Projects/FoodReactions'
import FurnitureProDotCom from './Projects/FurnitureProDotCom'
import ParkFinder from './Projects/ParkFinder'
import TickIt from './Projects/TickIt'

export default function Projects() {
    return (
        <div className='border-4 border-black space-y-2 rounded-xl p-2 projectsContainer'>
            <div className='text-3xl font-bold'>Projects</div>
            <AERDDietApp/>
            <BucketBattles/>
            <CYCWorkouts/>
            <FoodReactions/>
            <FurnitureProDotCom/>
            <ParkFinder/>
            <TickIt/>

        </div>
    )
}
