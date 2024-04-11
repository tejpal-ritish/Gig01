// eslint-disable-next-line no-unused-vars
import React from 'react'
import letsTalk from '../../assets/letsTalk.jpeg'

const LetsTalk = () => {
    return (
      <div className="min-h-[50vh] md:min-h-[85vh] flex justify-center items-center relative">
        <div className="h-[50%] md:h-full absolute inset-0 bg-cover bg-center justify-center " style={{backgroundImage: `url(${letsTalk})`, opacity: 0.1}} />
        <div className="flex w-[70%] font-light">
          <div className="flex flex-col gap-4 text-[#FAFAFA] py-4">
            <h2 className="text-5xl font-bold mb-4 ">Let&apos;s Talk</h2>
            <p className="text-xl leading-relaxed max-w-[60%]">
             Embark on the Future of Gaming! VelocityX: Turbo Pursuit promises innovation, excitement, and limitless potential. Join our journey to redefine gaming excellence. Let's create history together!
            </p>
            <a className='cursor-pointer'>
              <button className=' cursor-pointer bg-[#FAFAFA] text-black font-bold py-2 px-20 mt-8 rounded-lg'>Let&apos;s talk</button>
            </a>
          </div>
        </div>
      </div>
    )
  }

export default LetsTalk