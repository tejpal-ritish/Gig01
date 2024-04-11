import React, { useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Milestones.css';

const Milestones = () => {
    const milestoneRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index);
                    const h1Element = entry.target.querySelector('h1');

                    if (h1Element) {
                        if (index >= 0 && index <= 2) {
                            h1Element.classList.add('highlighted');
                        } else if (index >= 3 && index <= 4) {
                            h1Element.classList.add('blue-highlighted');
                        }
                    }
                }
            });
        }, { threshold: 0.5 });

        milestoneRefs.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex flex-col relative justify-start md:justify-center md:items-center md:min-h-screen">
            <h1 className='text-center text-4xl font-bold text-[#FAFAFA] py-10'>Milestones</h1>
            <div className='hidden xl:block w-full'>
                <Timeline position="alternate" className='hidden md:block text-[#FAFAFA] md:text-xl'>
                    {milestonesData.map((milestone, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <CustomTimelineConnector /> {/* Use custom connector component */}
                            </TimelineSeparator>
                            <TimelineContent
                                ref={(el) => (milestoneRefs.current[index] = el)}
                                className={index % 2 === 0 ? 'flex justify-start' : 'flex md:justify-end'}
                                data-index={index}
                            >
                                <div className='w-full max-w-[60%] mx-4 px-4 border-[#0B5B5A] border-2 flex flex-col rounded-lg py-6 gap-4 text-start'>
                                    <h1 className='font-light text-3xl'>
                                        {milestone.title}
                                    </h1>
                                    <p className='text-xl font-bold items-center'>{milestone.period}</p>
                                    <ul className='items-center font-light'>
                                        {milestone.tasks.map((task, idx) => (
                                            <li key={idx} className='list-disc ml-5 px-2 text-xl'>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
            <div className='flex justify-center'>
            <div className="xl:hidden w-[80%] lg:w-full">
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    {milestonesData.map((milestone, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <CustomTimelineConnector /> {/* Use custom connector component */}
                            </TimelineSeparator>
                            <TimelineContent
                                ref={(el) => (milestoneRefs.current[index] = el)}
                                className={'flex justify-start text-[#FAFAFA] md:text-xl'}
                                data-index={index}
                            >
                                <div className='w-full max-w-[80%] mx-4 px-4 border-[#0B5B5A] border-2 flex flex-col rounded-lg py-6 gap-4 text-start'>
                                    <h1 className='font-light text-3xl'>
                                        {milestone.title}
                                    </h1>
                                    <p className='text-xl font-bold items-center'>{milestone.period}</p>
                                    <ul className='items-center font-light'>
                                        {milestone.tasks.map((task, idx) => (
                                            <li key={idx} className='list-disc ml-5 px-2 text-xl'>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
            </div>
        </div>
    );
};

export default Milestones;

// Custom component for TimelineConnector with dashed border style
const CustomTimelineConnector = () => {
    return (
        <TimelineConnector className="custom-timeline-connector" />
    );
};

const milestonesData = [
    {
        title: 'Q1: Conceptualization and Design',
        period: '(January 1 - March 31)',
        tasks: [
            'Develop and finalize the game concept, including key gameplay mechanics and visual design.',
            'Create detailed concept art and design documents.',
            'Establish the core team roles and responsibilities.'
        ]
    },
    {
        title: 'Q2: Alpha Testing Phase',
        period: '(April 1 - June 30)',
        tasks: [
            'Commence the development of the alpha version of VelocityX.',
            'Conduct internal testing for core gameplay mechanics and features.',
            'Collect feedback from a select group of testers for iterative improvements.'
        ]
    },
    {
        title: 'Q3: Beta Version Launch',
        period: '(July 1 - September 30)',
        tasks: [
            'Release the beta version of VelocityX for a wider audience.',
            'Gather feedback from beta testers to identify and address any remaining issues.',
            'Initiate marketing and promotional activities to generate awareness.'
        ]
    },
    {
        title: 'Q4: Final Development and Optimization',
        period: '(October 1 - December 31)',
        tasks: [
            'Implement final changes based on beta testing feedback.',
            'Optimize game performance and address any technical issues.',
            'Prepare for the global launch, including server infrastructure and distribution platforms.'
        ]
    },
    {
        title: 'Q1 (Following Year): Global Launch',
        period: '(January 1 - March 31)',
        tasks: [
            'Officially launch VelocityX: Turbo Pursuit globally on multiple gaming platforms.',
            'Execute a comprehensive marketing campaign to maximize visibility.',
            'Monitor and respond to player feedback, releasing updates as necessary.'
        ]
    }
];
