/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import LetsTalk from './LetsTalk'
import Budget from './Budget'
import Monetization from './Monetization'
import OurTeam from './OurTeam'

const Landing = () => {
  return (
    <div className='bg-neutral-900 min-h-[100vh]'>
        <Navbar  />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <OurTeam />
        <Monetization />
        <Budget />
        <LetsTalk />
    </div>
  )
}

export default Landing