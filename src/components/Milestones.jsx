import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Milestones = () => {
    return (
        <Timeline align="alternate" className='text-[#FAFAFA] text-xl min-h-screen'>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <div className='flex flex-col max-w-[60%] mx-4 px-4 border-[#0B5B5A] border-2 rounded-lg py-6 gap-4'>
                    <h1 className='font-light text-3xl'>Q1: Conceptualization and Design </h1>
                    <p className='text-xl font-bold items-center'>(January 1 - March 31)</p>
                    <ul className='items-center'>
                        <li className='list-disc ml-5 px-2  text-xl'>Develop and finalize the game concept, including key gameplay mechanics and visual design.</li>
                        <li className='list-disc ml-5 px-2 text-xl'>Create detailed concept art and design documents.</li>
                        <li className='list-disc ml-5 px-2 text-xl'>Establish the core team roles and responsibilities.</li>

                    </ul>
                </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
};

export default Milestones;


// const milestonesData = [
//     {
//       title: 'Title 1',
//       items: ['List Item 1', 'List Item 2', 'List Item 3'],
//       description: 'Description or details about this event.'
//     },
//     {
//       title: 'Title 2',
//       items: ['List Item A', 'List Item B', 'List Item C'],
//       description: 'Description or details about this event.'
//     }
//   ];

//   return (
//     <div className='min-h-screen flex justify-center'>
//         <div className='absolute border-dashed border-2 min-h-screen '></div>
//         <div className='text-[#FAFAFA] flex  max-w-[50%] p-20 justify-center text-center'>
//             <div className="h-[10px] w-[10px] rounded-full bg-gray-200 ">
//                 <h1 className='px-10'>Hello World</h1>

//             </div>
//             <div></div>
//         </div>
//     </div>
//   );