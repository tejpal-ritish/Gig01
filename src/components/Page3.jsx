import React, {useState} from 'react'
import gameOverview from '../../assets/gameOverview.mp4'
import downArrow from '../../assets/downArrow.svg'
import upArrow from '../../assets/upArrow.svg'


const Page3 = () => {
    const [readMore, setreadMore] = useState(true)
  return (

    <div className='min-h-screen'>
        <div className='flex justify-center text-[#FAFAFA] tracking-wider font-light text-xl py-10 mt-10'>
            <div className='w-[45%]'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl  font-normal'>Game overview</h1>
                    <p className=' py-4'>Embark on a high-stakes, illicit street racing adventure in the neon-drenched metropolis of NexaCity. VelocityX delivers an exhilarating blend of breakneck speeds, intense rivalries, and breathtaking visuals. Set in a fictional world where every race is a story and every car has a personality, players will live on the edge of velocity and danger.</p>
                </div>
                <div className='flex gap-2 pb-4 cursor-pointer' onClick={(e) => {
                        e.preventDefault()
                        setreadMore(!readMore)
                    }}>
                    <a href="/"  className='font-semibold'>Read More </a>
                    {readMore ? <img src={downArrow} alt="" /> : <img src={upArrow} alt="" />}
                    

                </div>
                <p className={!readMore ? "pb-4 pt-2" : "hidden"} > <span className='font-bold'>Add here more text.</span> Donec malesuada urna non est tincidunt, sagittis porttitor metus lacinia. Vivamus vel leo id dui egestas varius. Nulla at ante eu lectus finibus pellentesque sed a arcu. Fusce vulputate lorem eu vulputate dignissim. Praesent consequat euismod libero quis dictum.</p>
                <video autoPlay loop muted className='w-[100%] rounded-xl py-2'>
                    <source src={gameOverview} type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Page3