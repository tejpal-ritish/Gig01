import computer from '../../assets/computer.jpg'

const Page8 = () => {
  return (
    <div className='font-sans'>
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className='mx-10 border border-teal-800 rounded-lg'>
                    <h1 className="text-white text-3xl px-5 py-5">Technical Details</h1>
                    <p className="text-white text-xl px-5 pb-5">Powered by our proprietary SonicDrive Engine, VelocityX delivers smooth gameplay, realistic physics, and unparalleled graphics.</p>
                </div> 
            </div>
            <div className="flex flex-col w-1/2 sticky top-10">
                    <img src={computer} alt="" className="w-full "/>
                </div>
        </div>
    </div>
  )
}

export default Page8