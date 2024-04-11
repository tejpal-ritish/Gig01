// eslint-disable-next-line no-unused-vars
import React from 'react'
import letsTalk from '../../assets/letsTalk.jpeg'

const LetsTalk = () => {
    return (
      <div className="min-h-screen flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${letsTalk})`, opacity: 0.1}} />
        <div className="w-[70%]">
          <div className="text-[#FAFAFA]">
            <h2 className="text-5xl font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-xl leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out to me.
            </p>
          </div>
        </div>
      </div>
    )
  }

export default LetsTalk