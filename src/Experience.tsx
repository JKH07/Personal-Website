
"use client";

import NavBarT from "./navbar";
import { Skills } from "./Skills";

import { Timelinet } from "./timeline";
import { Footnotet } from "./Footnote";
import { useFlowbiteInit } from "./hooks/useFlowbiteInit";
export const Experience: React.FC = () => {
    useFlowbiteInit();
return(<>
<div className="">
    <NavBarT />

<div className="block md:flex min-w-[10rem]     
    max-w-4xl           
    mx-auto            
    px-4             
    text-center justify-center 
    w-full  gap-10" >
    <Timelinet/>
    
<Skills/>
</div>
  <Footnotet/>

</div>
</>)
};

