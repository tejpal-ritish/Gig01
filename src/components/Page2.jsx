import React from 'react'
import ceo from '../../assets/ceo.png'
import aboutUs from '../../assets/aboutUs.mp4'

const Page2 = () => {
  return (
    <div className='text-[#FAFAFA] tracking-wider font-light'>
        <div className='flex flex-col  '>
            <div className='flex justify-center   bg-black py-8'>
                <div className=' flex flex-row justify-center items-center p-2 max-w-[80%] gap-20 min-h-[45vh]'>
                    <div className='max-w-[20%]'>
                        <img src={ceo} alt="" className='size-[100%] rounded-full aspect-square object-cover'/>
                    </div>

                    <div className='flex flex-col text-xl '>
                        <h1 className='text-[30px] py-4'>Hi there,</h1>
                        <p className='pb-4 '>Welcome to the adrenaline-fueled world of VelocityX! I'm the passionate game developer and proud owner of SonicRush Studios. Buckle up for an exciting journey through the streets of innovation and speed.</p>
                        <h2 className='font-bold'>Michael Scott,</h2>
                        <p>Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-row justify-center w-[90%] items-center'>
                    <div className='flex flex-col text-xl w-[90%] px-2'>
                        <h1 className='text-5xl font-extrabold py-8'>About us</h1>
                        <p>SonicRush Studios is a cutting-edge design studio dedicated to pushing the boundaries of gaming. With a team of seasoned developers and visionary designers, we strive to create immersive experiences that redefine the gaming landscape.</p>
                    </div>
                    <div className='py-20'>
                    <video autoPlay loop muted className='w-[100%] rounded-lg'>
                        <source src={aboutUs} type='video/mp4' />
                        {/* Add more <source> elements for other video formats if needed */}
                        Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page2