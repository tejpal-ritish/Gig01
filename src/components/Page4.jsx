import React from 'react'

const Page4 = () => {
  return (
    <div className='min-h-screen items-center'>
        <div className='flex justify-center text-[#FAFAFA] tracking-wider font-light text-xl py-10 mt-32 items-center'>
            <div className='w-[70%] justify-center items-center'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl p-16'>Key Features</h1>
                </div>
                <div className='grid grid-cols-3 gap-8 items-center'>
                    <div className='flex flex-col justify-center items-center p-2' >
                        <h1 className='text-3xl py-6'>Vehicle Customization</h1>
                        <p>Unleash your creativity with an extensive customization system, allowing players to personalize every aspect of their ride, from the engine roar to the paint job.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center p-2'>
                        <h1 className='text-3xl py-6'>Engaging  Storyline</h1>
                        <p>Immerse yourself in a gripping narrative where the lines between friend and foe blur, and every race becomes a chapter in your character's story.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center p-2'>
                        <h1 className='text-3xl py-6'>Day-Night Cycle</h1>
                        <p>Experience the ever-changing atmosphere of NexaCity with a dynamic day-night cycle that affects not only visibility but also the behavior of rival racers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4