import { Card } from "flowbite-react";
import AboutCard from "./AboutCard";

export default function About(){
    return(<>
    <h1 className="text-center mt-5 ">About Me</h1>
    <Card href="#" className=" bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900  drop-shadow text-center justify-center ml-60 mt-10 w-200" >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error obcaecati eaque saepe. Necessitatibus reprehenderit beatae nemo reiciendis! Iure delectus, sed mollitia, eius debitis illum inventore voluptatum id nemo, dolorum eligendi.
          </p>
    </Card>
     
    <h1 className="text-center mt-5">Experience</h1>
    <AboutCard/>
    </>)
}