
import { Card } from "flowbite-react";


export function Skills(){
    return(<div className="min-w-[10rem]       
    max-w-4xl           
    mx-auto            
    px-4             
   
    text-center justify-center mt-30
    w-full   ">
   <h6>Skills</h6>
    <Card className=" bg-gray-100 relative  mt-10 p-6  w-100 h-135 ">
     
    <ul>
       <h2><b>Programming Languages</b></h2>
        <hr/>
        <li>1-Data Science (Pandas, Jupyter Notebook, Numpy, Scikit learn)</li>
        <li>2-Frontend (React Typescript, Java Script)</li>
        <li>3-Backend (Mysql, PHP)</li>
        <li>4-Java</li>
        <li>5-Git/Github</li>
        <br></br>
        <br></br>
        <br></br>
        <h2><b>Soft Skills</b></h2>
        <hr/>
        <li>1-Teamwork</li>
        <li>2-Communication</li>
        <li>3-Intiative(Mysql, PHP)</li>
        <li>4-Critical Thinking</li>
        <li>5-Problem-solving</li>
    </ul>
    </Card>
    </div>)
}