
"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function Timelinet() {
  return (
    <>
    
    <div className="min-w-[10rem]       
    max-w-4xl           
    mx-auto            
    px-4             
   
    text-center justify-center mt-30
    w-full   ">
    <h6>Experience</h6>
    <Timeline className="mt-10">
      <TimelineItem className=" text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient drop-shadow text-center  rounded-2xl">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent >
          <TimelineTime>September 2023</TimelineTime>
          <TimelineTitle>Beirut Arab University</TimelineTitle>
          <TimelineBody>
            Started pursuing a computer science degree. I'm currently in the AI and data science track.
          </TimelineBody>
        
        </TimelineContent>
      </TimelineItem>
      <div className="dotted-arrow"></div>

      <TimelineItem className=" text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient drop-shadow text-center  rounded-2xl">
      
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>April 2025</TimelineTime>
          <TimelineTitle>IDS Fintech </TimelineTitle>
          <TimelineBody>
            Frontend React internship. I worked on creating and optimizing several pages for a wealth management  website.
          </TimelineBody>
          <a href="https://baudom-my.sharepoint.com/:w:/g/personal/jmh210_student_bau_edu_lb/EXbzs3v4T8pMkWPAC3YikfAB933_C6e3CbkPZwcfuYoniA?e=6QB1Wn" download>Job Shadowing</a>

        </TimelineContent>
        
      </TimelineItem>
      <div className="dotted-arrow"></div>
    <TimelineItem className=" text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient drop-shadow text-center  rounded-2xl">
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>June 2025</TimelineTime>
          <TimelineTitle>Semicolon CTF</TimelineTitle>
          <TimelineBody>
            Participated in workshops and a competition hosted by semicolon cybersecurity company.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <div className="dotted-arrow"></div>

    </Timeline>
    </div>
    </>
  );
}
