
import { Card } from "flowbite-react";


export  function AboutCard() {
 return(
  <div>
        <div className="block md:flex mt-10 items-center gap-1.5">
           <Card
     className="min-w-[10rem]       
    max-w-4xl           
    mx-auto            
    px-4             
   
    text-center justify-center mt-10
    w-full   "
      imgAlt="alt"
     imgSrc="in.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        React Internship-IDS Fintech
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Participated in a 2 month frontend react internship. Gained hands-on experience with company-scale websites.
      </p>
    </Card>
        <Card
      className="min-w-[10rem]       
    max-w-4xl           
    mx-auto            
    px-4             
   
    text-center justify-center mt-10
    w-full   "
      imgAlt="alt"
      imgSrc="212.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Semicolon CTF
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Participated in Lebanon's largest CTF. Attended workshops and gained alot of insight about cybersecurity tools like KaliLinux etc.
      </p>
    </Card>
    
   
    <Card
      className="min-w-[10rem]       
    max-w-4xl           
    mx-auto            
    px-4             
   
    text-center justify-center mt-10
    w-full   "
      imgAlt="alt"
      imgSrc="baiu.jpeg"

    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       AI Summer Camp Volunteer
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Volunteered to help teach high schoolers about AI fundamentals
      </p>
    </Card>
    </div>
    <div className="block md:flex mt-10 items-center gap-1"></div>
    </div>
  )
}
