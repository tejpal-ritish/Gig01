/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
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
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <LetsTalk />
    </div>
  )
}

export default Landing