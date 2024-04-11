import React from 'react'

const Monetization = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='w-[78%] text-[#FAFAFA] font-light tracking-wider leading-relaxed'>
            <div className='flex flex-col'>
                <div className='flex justify-center p-10'>
                    <h1 className='text-5xl font-bold'>Monetization Strategy</h1>
                </div>
                <div className='grid grid-cols-3 gap-8 text-xl p-10'>
                    <div className='border-[#0B5B5A] border-2 p-4 rounded-lg '>
                        <h1 className='text-3xl font-normal py-4 text-center'>Unlockable Content</h1>
                        <ul className='px-6 items-center list-disc '>
                            <li className='py-2'>Implement a progression system where players can unlock new cars, customization options, and story chapters through in-game achievements or currency.</li>
                            <li className='py-2'>Encourage engagement by making certain premium content accessible through regular gameplay.</li>
                        </ul>
                    </div >
                    <div className='border-[#0B5B5A] border-2 p-4 rounded-lg '>
                        <h1 className='text-3xl font-normal py-4 text-center'>Ad-Based Monetization</h1>
                        <ul className='px-6 items-center list-disc '>
                            <li className='py-2'>Integrate non-intrusive ads, offering players the choice to watch ads in exchange for in-game rewards or premium currency.</li>
                            <li className='py-2'>Implement strategic ad placements to enhance rather than disrupt the gaming experience.</li>
                        </ul>
                    </div>
                    <div className='border-[#0B5B5A] border-2 p-4 rounded-lg'>
                        <h1 className='text-3xl font-normal py-4 text-center'>Season Subscriptions</h1>
                        <ul className='px-6 items-center list-disc '>
                            <li className='py-2'>Introduce optional season passes that provide exclusive content, early access to new features, and additional in-game benefits.</li>
                            <li className='py-2'>Consider a subscription model for dedicated players, offering recurring revenue in exchange for ongoing premium perks.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Monetization