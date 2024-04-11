import React, { useState, useEffect, useRef } from 'react';

const Monetization = () => {
  const [borderCount, setBorderCount] = useState(0);
  const [isBorderVisible, setIsBorderVisible] = useState([false, false, false]);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger border visibility when component first intersects
        if (entry.isIntersecting) {
          // Start showing borders at intervals
          const interval = setInterval(() => {
            if (borderCount < 3) {
              setIsBorderVisible((prev) => {
                const updated = [...prev];
                updated[borderCount] = true;
                return updated;
              });
              setBorderCount((prevCount) => prevCount + 1);
            } else {
              clearInterval(interval); // Stop the interval after all borders are shown
            }
          }, 500);

          // Cleanup observer and interval on unmount
          return () => {
            observer.disconnect();
            clearInterval(interval);
          };
        }
      },
      { threshold: 0.3 }
    );

    // Observe the component's ref
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [borderCount]); // Re-run effect when borderCount changes

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-[78%] text-[#FAFAFA] font-light tracking-wider leading-relaxed'>
        <div className='flex flex-col'>
          <div className='flex justify-center p-10'>
            <h1 className='text-5xl font-bold'>Monetization Strategy</h1>
          </div>
          <div ref={componentRef} className='grid grid-cols-3 gap-8 text-xl p-10'>
            <div className={`p-4 rounded-lg ${isBorderVisible[0] ? 'border-[#0B5B5A] border' : ''}`}>
              <h1 className='text-3xl font-normal py-4 text-center'>Unlockable Content</h1>
              <ul className='px-6 items-center list-disc '>
                <li className='py-2'>Implement a progression system where players can unlock new cars, customization options, and story chapters through in-game achievements or currency.</li>
                <li className='py-2'>Encourage engagement by making certain premium content accessible through regular gameplay.</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${isBorderVisible[1] ? 'border-[#0B5B5A] border' : ''}`}>
              <h1 className='text-3xl font-normal py-4 text-center'>Ad-Based Monetization</h1>
              <ul className='px-6 items-center list-disc '>
                <li className='py-2'>Integrate non-intrusive ads, offering players the choice to watch ads in exchange for in-game rewards or premium currency.</li>
                <li className='py-2'>Implement strategic ad placements to enhance rather than disrupt the gaming experience.</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${isBorderVisible[2] ? 'border-[#0B5B5A] border' : ''}`}>
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
  );
};

export default Monetization;
