import React, { useState } from 'react';
import marketReseach_1 from '../../assets/marketResearch_1.jpeg';
import marketReseach_2 from '../../assets/marketResearch_2.jpeg';
import marketReseach_3 from '../../assets/marketResearch_3.png';

const MarketResearch = () => {
  const [curr, setCurr] = useState(0);

  // Define content for each section
  const sections = [
    {
      title: 'Genre Landscape Analysis',
      image: marketReseach_1,
      description: [
        "VelocityX's market research dives deep into the racing game landscape, analyzing the strengths of genre leaders — Need for Speed's adrenaline-fueled street races, Burnout's chaotic and aggressive driving, and Midnight Club's open-world exploration.",
        'Identifying the preference for high-speed thrills, diverse car options, and open-world experiences, VelocityX strategically incorporates these insights into its own development plan.',
      ],
    },
    {
      title: 'Strategic Integration of Features',
      image: marketReseach_2,
      description: [
        "VelocityX carefully selects standout features from its competitors, integrating Need for Speed's diverse car lineup, Burnout's emphasis on controlled chaos, and Midnight Club's open-world exploration.",
        'By strategically combining these elements, VelocityX aims to create a racing experience that encapsulates the best features of each, offering players a comprehensive and thrilling gameplay adventure.',
      ],
    },
    {
      title: 'Innovation for Uniqueness',
      image: marketReseach_3,
      description: [
        'VelocityX stands out in the market by introducing cutting-edge innovations. These include a dynamic day-night cycle that affects gameplay, a narrative-driven progression system inspired by action movie plots, and a unique in-game economy that rewards both skillful racing and strategic customization choices.',
        'This commitment to innovation not only sets VelocityX apart but also establishes it as a trendsetter in the racing game genre, promising players an immersive and fresh gaming experience.',
      ],
    },
  ];

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-[70%] font-light text-[#FAFAFA] tracking-wider text-xl'>
        <h1 className='text-center text-4xl font-bold p-20 items-center'>Market Research</h1>
        <div className='flex flex-row gap-8 items-center'>
          {/* Navigation Buttons */}
            <div className='flex flex-col gap-2 max-w-[18%] '>
                {sections.map((section, index) => (
                <button
                    key={index}
                    className={` text-start rounded-lg px-3 py-2 ${
                    curr === index ? 'bg-[#A6ABB2]' : ' bg-[#0B5B5A] '
                    }`}
                    onClick={() => setCurr(index)}
                >
                    {section.title}
                </button>
                ))}
            </div>

          {/* Image */}
            {sections[curr] && (
              <div className='flex w-[45%] rounded-lg h-[300px] items-center '>
                <img
                  src={sections[curr].image}
                  alt={sections[curr].title}
                  className='object-fill rounded-lg '
                />
              </div>
            )}
          {/* Text */}
            {sections[curr] && (
              <div className='max-w-[38%] flex flex-col items-center text-center'>
                <ul className='text-left items-center'>
                  {sections[curr].description.map((point, index) => (
                    <li key={index} className='py-2 list-disc'>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MarketResearch;
