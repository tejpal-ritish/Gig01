import React from 'react'
import arrow from '../../assets/arrow.svg'
import calendar from '../../assets/calendar.svg'

const Navbar = () => {
  return (
    <div className=' tracking-wider font-light justify-between flex  bg-white p-3 px-8 items-center fixed top-0 w-full z-10'>
        <div className=''>
            <h1 className='font-semibold text-sm '>Gaming Pitch deck</h1>
        </div>
        <div className='flex gap-4 items-center'>
            <div>
                <img src={arrow} alt="" className='size-[75%]' />
            </div>
            <div className='flex bg-black rounded text-[#FAFAFA] p-2 px-3 items-center gap-1'>
                <img src={calendar} alt="" className='items-center size-[20%]'/>
                <a href='mailto:test@mail.com' className='text-sm font-semibold'>Let's talk</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar