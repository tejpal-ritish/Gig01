import React from 'react'
import Navbar from './Navbar'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import LetsTalk from './LetsTalk'

const Landing = () => {
  return (
    <div className='bg-neutral-900 min-h-[100vh]'>
        <Navbar  />
        <Page2 />
        <Page3 />
        <Page4 />
        <LetsTalk />
    </div>
  )
}

export default Landing