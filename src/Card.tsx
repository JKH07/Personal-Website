

import { Card } from "flowbite-react";

import { Carousel } from "flowbite-react";

import { useState } from "react";

"use client";

import {
 
  FooterIcon,

} from "flowbite-react";
import {  BsGithub, BsLinkedin} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export function Cardt() {
    const [shown,setshow]=useState<boolean>(false)
  
  return (
  
    <>
      
      <Card className=" min-w-full bg-gray-100 relative p-8 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-15 md:mt-0 md:ml-20">
            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white mt-20">Jana Harb</h1>
            <span className="text-b text-gray-500 dark:text-gray-400">AI & Data Scientist</span>

            <div className="mt-6">
              <button
                onClick={()=>{if(shown==false){setshow(true)}else{setshow(false)}}}
                className="text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient"
              >
                Contact
              </button>
              <div className={(!shown)?("invisible ml-2"):("visible ")}><ul>
                <li className="mt-2"><FooterIcon href="https://github.com/JKH07" icon={MdEmail} /> <a href="mailto:janaharb8732@gmail.com">janaharb8732@gmail.com</a></li>
                <li  className="mt-2"><FooterIcon href="https://github.com/JKH07" icon={BsGithub} /><a href="https://github.com/JKH07">JKH07</a></li>
                <li  className="mt-2"> 
                 <FooterIcon href="https://www.linkedin.com/in/jana-harb-80b920348/" icon={BsLinkedin} /><a href="https://www.linkedin.com/in/jana-harb-80b920348/">Jana Harb</a></li>
                </ul></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel pauseOnHover>
              <img className='h-80' src='https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=White&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
              
            </Carousel>
          </div>
        </div>
      </Card>
  

      
    </>
  );
}

