import React, { useState, useEffect, useRef } from 'react';
import ourTeam1 from '../../assets/ourTeam_1.png';
import ourTeam2 from '../../assets/ourTeam_2.png';
import ourTeam3 from '../../assets/ourTeam_3.png';
import ourTeam4 from '../../assets/ourTeam_4.png';

const OurTeam = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1); // Index of the currently visible image
  const images = [ourTeam1, ourTeam2, ourTeam3, ourTeam4];
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start showing images at intervals
          const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => {
              const nextIndex = prevIndex + 1;
              if (nextIndex < images.length) {
                return nextIndex;
              } else {
                clearInterval(interval); // Stop interval when all images are visible
                return prevIndex;
              }
            });
          }, 250);

          // Cleanup observer and interval on unmount
          return () => {
            observer.disconnect();
            clearInterval(interval);
          };
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of component is in view
    );

    // Observe the component's ref
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div ref={componentRef} className='min-h-screen flex justify-center items-center'>
      <div className='w-[74%] text-xl font-light text-[#FAFAFA] items-center tracking-wider'>
        <h1 className='text-center text-4xl font-bold p-10'>Our Team</h1>
        <div className='grid grid-cols-4 text-center gap-4'>
          {images.map((image, index) => (
            <div key={index} className={`flex flex-col gap-2 transition-opacity duration-500 ${visibleIndex >= index ? 'opacity-100' : 'opacity-20'}`}>
              <img src={image} className='aspect-square object-cover rounded-full p-4' alt='' />
              <p className='font-bold'>{getMemberName(index)}</p>
              <p>{getMemberRole(index)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper functions to get member name and role based on index
const getMemberName = (index) => {
  switch (index) {
    case 0:
      return 'Kate Riley';
    case 1:
      return 'Kanai Tadao';
    case 2:
      return 'Alicia Wright';
    case 3:
      return 'Mike Rawicki';
    default:
      return '';
  }
};

const getMemberRole = (index) => {
  switch (index) {
    case 0:
      return 'CEO';
    case 1:
      return 'CTO';
    case 2:
      return 'CPO';
    case 3:
      return 'Head of Sales';
    default:
      return '';
  }
};

export default OurTeam;
