import React from 'react'
import arrow from '../../public/assets/arrow.svg'
import calendar from '../../public/assets/calendar.svg'

const Navbar = () => {
  return (
    <div className='justify-between flex bg-white p-2 px-8 items-center'>
        <div className=''>
            <h1 className='font-semibold text-sm '>Gaming Pitch deck</h1>
        </div>
        <div className='flex gap-4 items-center'>
            <div>
                <img src={arrow} alt="" className='size-[75%]' />
            </div>
            <div className='flex bg-black rounded text-white p-2 px-3 items-center gap-1'>
                <img src={calendar} alt="" className='items-center size-[20%]'/>
                <p className='text-sm font-semibold'>Let's talk</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar