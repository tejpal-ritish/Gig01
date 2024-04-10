import React from 'react'
import letsTalk from '../../public/assets/letsTalk.jpeg'

const LetsTalk = () => {
    return (
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${letsTalk})`, opacity: 0.1}}>
        <div className="w-[70%] opacity-100">
          <div className="text-[#FAFAFA]">
            <h2 className="text-5xl font-bold mb-4">Let's Talk</h2>
            <p className="text-xl leading-relaxed">
              I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out to me.
            </p>
          </div>
        </div>
      </div>
    )
  }

export default LetsTalk