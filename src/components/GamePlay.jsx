import React from 'react'
import cars from '../../assets/carsBack.png'
import asphalt from '../../assets/asphalt.mp4'
import cars2 from '../../assets/carsHood.png'
import computer from '../../assets/computer.jpg'

const GamePlay = () => {
  return (
    <div>
        <div className='font-sans min-h-screen '>
            <h1 className="text-white text-3xl text-center py-12 mb-3">Gameplay Showcase</h1>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className='mx-10 border border-teal-800 rounded-lg'>
                        <h1 className="text-white text-3xl px-5 py-5">Game Design and Visuals</h1>
                        <p className="text-white text-xl px-5 pb-5">VelocityX boasts stunning visuals with meticulously crafted cityscapes, realistic weather effects, and jaw-dropping lighting.</p>
                    </div> 
                </div>
                <div className="flex flex-col w-1/2">
                    <img src={cars} alt="" className="w-full sticky top-0" />
                </div>
            </div>
        </div>
        <div className='font-sans'>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className='mx-10 border border-teal-800 rounded-lg'>
                        <h1 className="text-white text-3xl px-5 py-5">Scenarios Example</h1>
                        <p className="text-white text-xl px-5 pb-5">Navigate through intense police chases, daring heists, and dramatic showdowns against rival racing crews.</p>
                    </div> 
                </div>
                <div className="flex flex-col w-1/2">
                    <video autoPlay loop muted className='h-auto w-full'>
                        <source src={asphalt} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
        <div className='font-sans'>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className='mx-10 border border-teal-800 rounded-lg'>
                        <h1 className="text-white text-3xl px-5 py-5">Character Designs</h1>
                        <p className="text-white text-xl px-5 pb-5">Meet a cast of diverse and intriguing characters, each with their own motives and backstories, adding depth to the racing experience.</p>
                    </div> 
                </div>
                <div className="flex flex-col w-1/2 sticky top-10">
                        <img src={cars2} alt="" className="w-full "/>
                    </div>
            </div>
        </div>
        <div className='font-sans'>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className='mx-10 border border-teal-800 rounded-lg'>
                        <h1 className="text-white text-3xl px-5 py-5">Technical Details</h1>
                        <p className="text-white text-xl px-5 pb-5">Powered by our proprietary SonicDrive Engine, VelocityX delivers smooth gameplay, realistic physics, and unparalleled graphics.</p>
                    </div> 
                </div>
                <div className="flex flex-col w-1/2 sticky top-10">
                        <img src={computer} alt="" className="w-full "/>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default GamePlay