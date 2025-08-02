import About from "./About";

import { Cardt } from "./Card";
import { Footnotet } from "./Footnote";
import NavBarT from "./navbar";
import { useFlowbiteInit } from "./hooks/useFlowbiteInit";
export const Home: React.FC = () => {
    useFlowbiteInit();
   return( <><NavBarT />
    <Cardt/>
    <About/>
    <Footnotet/></>)
}