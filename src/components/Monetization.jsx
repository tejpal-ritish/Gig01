import React, { useState, useEffect, useRef } from 'react';

const Monetization = () => {
  const [borderCount, setBorderCount] = useState(0);
  const [isBorderVisible, setIsBorderVisible] = useState([false, false, false]);
  const [opacityValues, setOpacityValues] = useState([0.2, 0.2, 0.2]); // Initial opacity values
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            if (borderCount < 3) {
              setIsBorderVisible((prev) => {
                const updated = [...prev];
                updated[borderCount] = true;
                return updated;
              });

              setOpacityValues((prevValues) => {
                const updated = [...prevValues];
                updated[borderCount] = 1; // Increase opacity to 1
                return updated;
              });

              setBorderCount((prevCount) => prevCount + 1);
            } else {
              clearInterval(interval);
            }
          }, 250);

          return () => {
            observer.disconnect();
            clearInterval(interval);
          };
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [borderCount]);

  const milestonesData = [
    {
      title: 'Unlockable Content',
      details: [
        'Implement a progression system where players can unlock new cars, customization options, and story chapters through in-game achievements or currency.',
        'Encourage engagement by making certain premium content accessible through regular gameplay.'
      ]
    },
    {
      title: 'Ad-Based Monetization',
      details: [
        'Integrate non-intrusive ads, offering players the choice to watch ads in exchange for in-game rewards or premium currency.',
        'Implement strategic ad placements to enhance rather than disrupt the gaming experience.'
      ]
    },
    {
      title: 'Season Subscriptions',
      details: [
        'Introduce optional season passes that provide exclusive content, early access to new features, and additional in-game benefits.',
        'Consider a subscription model for dedicated players, offering recurring revenue in exchange for ongoing premium perks.'
      ]
    }
  ];

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-[78%] text-[#FAFAFA] font-light tracking-wider leading-relaxed'>
        <div className='flex flex-col'>
          <div className='flex justify-center p-10'>
            <h1 className='text-5xl font-bold'>Monetization Strategy</h1>
          </div>
          <div ref={componentRef} className='grid grid-cols-1 2xl:grid-cols-3 gap-8 text-xl p-10'>
            {milestonesData.map((strategy, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-[#0B5B5A] border`}
                style={{ opacity: opacityValues[index] }}
              >
                <h1 className='text-3xl font-normal py-4 text-center'>{strategy.title}</h1>
                <ul className='px-6 items-center list-disc '>
                  {strategy.details.map((detail, idx) => (
                    <li key={idx} className='py-2'>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
