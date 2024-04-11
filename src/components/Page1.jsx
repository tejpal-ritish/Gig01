import logo from '../../assets/logoipsum.png'
import landing from '../../assets/landing.mp4'

const Page1 = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center relative">
        <video autoPlay loop muted className='w-[100%] rounded-xl py-2 opacity-10'>
            <source src={landing} type='video/mp4'/>
        </video>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
            <img src={logo} alt="" className='' />
            <div>
                <h1 className='text-5xl text-white font-bold text-center mt-10'>VelocityX: Turbo Pursuit</h1>
                <p className='text-white text-center pt-8'>The excitement for speed: gaming pitch deck</p>
                <p className='text-white text-center pt-8'> Avg. Reading Time: <b >4 min</b></p>
            </div>
        </div>
    </div>
  )
}

export default Page1