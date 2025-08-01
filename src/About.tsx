import { Card } from "flowbite-react";
import { AboutCard } from "./AboutCard";


export default function About(){
    return(<>
    <div className="justify-center scroll-smooth" id="about">
    <h1 className="text-center mt-5 ">About Me</h1>
    <Card  className=" min-w-[30rem] text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient drop-shadow text-center justify-center mt-10" >
          
          <p className="font-normal text-gray-700 dark:text-gray-400">
         I'm a <b>dedicated and curious learner</b> with a strong passion for exploring the many 
         dimensions of computer science. My interests particularly lie in <b>artificial intelligence and 
         machine learning, </b>
         where I’m constantly seeking to deepen my understanding of how intelligent systems are built 
         and optimized. Whether it's diving into the math behind algorithms or experimenting 
         with real-world applications ,I find great excitement in the process of learning and building. 
         I'm always <b>open to new challenges and opportunities</b> that allow me to <b>grow, collaborate,
          and contribute </b> to innovative projects in the tech space.
          
          </p>
        <a className="w-40 justify-center" href="/CoverLetter.docx" download>Cover Letter</a>
    </Card>
     </div>
    <h1 className="text-center mt-5">Certificates</h1>
    <AboutCard/>
    </>)
}