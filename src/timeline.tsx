
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
    
    <div className="w-100 mt-30 ml-15 text-center">
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
           <a className="w-40 justify-center" href="JobShadowing.pdf" 
  download="JobShadowing.pdf">Job Shadowing</a>
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
