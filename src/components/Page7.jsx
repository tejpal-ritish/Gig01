import cars from '../../assets/carsHood.png'

const Page7 = () => {
  return (
    <div className='font-sans'>
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className='mx-10 border border-teal-800 rounded-lg'>
                    <h1 className="text-white text-3xl px-5 py-5">Character Designs</h1>
                    <p className="text-white text-xl px-5 pb-5">Meet a cast of diverse and intriguing characters, each with their own motives and backstories, adding depth to the racing experience.</p>
                </div> 
            </div>
            <div className="flex flex-col w-1/2 sticky top-10">
                    <img src={cars} alt="" className="w-full "/>
                </div>
        </div>
    </div>
  )
}

export default Page7