import cars from '../../assets/carsBack.png'

const Page5 = () => {
    
    return (
        <div className='font-sans min-h-screen '>
            <h1 className="text-white text-3xl text-center py-12 mb-3">Gameplay Showcase</h1>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className='mx-10 border border-teal-800 rounded-lg'>
                        <h1 className="text-white text-3xl px-5 py-5">Game Design and Visuals</h1>
                        <p className="text-white text-xl px-5 pb-5">VelocityX boasts stunning visuals with meticulously crafted cityscapes, realistic weather effects, and jaw-dropping lighting.</p>
                    </div> 
                </div>
                <div className="flex flex-col w-1/2">
                    <img src={cars} alt="" className="w-full sticky top-0" />
                </div>
            </div>
        </div>
  )
}

export default Page5
