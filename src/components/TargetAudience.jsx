import React, { useState } from 'react'
import {Chart} from 'react-google-charts'


const TargetAudience = () => {
  return (
    <div>
      <div className='box-border '>
        <div className='text-center text-3xl text-white py-10 my-20'>Target Audience</div>
      </div>

      <div className='grid grid-cols-3 gap-6 mx-20 text-white font-sans'>
        <div className='flex flex-col box-border border border-[#0B5B5A] rounded-lg p-6'>
          <p>by gender</p>
          <Chart 
            width={'100%'}
            height={'300px'}
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['Gender', 'Percentage'],
              ['Female', 30],
              ['Male', 70],
            ]}
            options={{
              backgroundColor: 'black',
              pieHole: 0.6,
              is3D: false,
              legend: 'none',
              tootltip: { trigger: 'none' },
              colors: ['#a6abb2', '#0B5B5A'],
            }}
          />
          <p>VelocityX caters to the thrill-seeking male gamer (70%) with high-speed races and extensive vehicle customization. For females (30%), the game offers an inclusive experience, combining speed and storytelling.</p>
        </div>

        <div className='flex flex-col box-border border border-[#0B5B5A] rounded-lg p-6'>
          <h1 className='text-center'>by age</h1>
          <p>chart placeholder</p>
          <p>For gamers aged 18-24 (40%), VelocityX immerses them in thrilling street races and dynamic car customization. Ages 25-34 (45%) experience engaging, high-octane action with compelling narratives.</p>
        </div>
        <div className='flex flex-col box-border border border-[#0B5B5A] rounded-lg p-6'>
          <p>by occupation/hobby</p>
          <p>chart placeholder</p>
          <p>VelocityX caters to diverse audiences: gaming enthusiasts (60%) experience dynamic gameplay, car enthusiasts (20%) enjoy extensive customization, and action and esports fans (10% each) find immersive experiences.</p>
        </div>
      </div>
    </div>
  )
}

export default TargetAudience
