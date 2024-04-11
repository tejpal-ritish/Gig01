import React, { useEffect, useState } from 'react';

const Budget = () => {
  const [count, setCount] = useState(0); // Start from 1 million

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start incrementing the count when the target element is in view
            const incrementBudget = () => {
              if (count < 10) { // Increment until 10 million (exclusive)
                setTimeout(() => {
                  setCount((prevCount) => prevCount + 1); // Increment count by 1
                }, 250); // Delay between each increment (in milliseconds)
              }
            };
            incrementBudget(); // Start the incrementation
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the target is visible
    );

    const targetElement = document.querySelector('.test');
    if (targetElement) {
      observer.observe(targetElement);
    }

    // Clean up the observer to avoid memory leaks
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [count]); // Re-run the effect when count changes

  return (
    <div className='min-h-[50vh] flex justify-center'>
      <div className='flex w-[90%] text-[#FAFAFA] tracking-wider font-light'>
        <div className='flex items-center text-xl'>
          <div className='flex flex-col w-[50%]'>
            <h2 className='text-3xl py-4 font-normal'>Budget</h2>
            <p>
              VelocityX:Turbo Pursuit envisions a $10 million budget to ensure a
              polished and engaging gaming experience. This includes a
              comprehensive development plan, strategic marketing efforts for a
              successful global launch, and ongoing support for post-launch
              updates and expansions. The budget is structured to cover all
              facets of the game's lifecycle, aiming for sustained success in the
              competitive gaming market.
            </p>
          </div>
          <div className='flex justify-center text-4xl w-[50%]'>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <h1>Total Budget Estimate:</h1>
              <h1 className='test font-black text-[#0b5b5a]'>${count} Million</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
