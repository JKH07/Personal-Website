
"use client";

import {
  Footer,
  FooterCopyright,
  FooterIcon,

} from "flowbite-react";
import {  BsGithub, BsLinkedin} from "react-icons/bs";

import NavBarT from "./navbar";
import { Skills } from "./Skills";

import { Timelinet } from "./timeline";
export const Experience: React.FC = () => {
return(<>
<div className="">
    <NavBarT />

<div className="block md:flex justify-center" id="time">
    <Timelinet/>
<Skills/>
</div>
<Footer container className="mt-30 min-w-full" id="rime">
      
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Jana Harb" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://github.com/JKH07" icon={BsGithub} />
            <FooterIcon href="https://www.linkedin.com/in/jana-harb-80b920348/" icon={BsLinkedin} />
          </div>
        </div>
      
    </Footer>
</div>
</>)
};