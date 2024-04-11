import asphalt from '../../assets/asphalt.mp4'

const Page6 = () => {
  return (
    <div className='font-sans'>
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className='mx-10 border border-teal-800 rounded-lg'>
                    <h1 className="text-white text-3xl px-5 py-5">Scenarios Example</h1>
                    <p className="text-white text-xl px-5 pb-5">Navigate through intense police chases, daring heists, and dramatic showdowns against rival racing crews.</p>
                </div> 
            </div>
            <div className="flex flex-col w-1/2">
                <video autoPlay loop muted className='h-auto w-full'>
                    <source src={asphalt} type='video/mp4' />
                </video>
            </div>
        </div>
    </div>
  )
}

export default Page6