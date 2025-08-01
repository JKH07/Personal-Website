import About from "./About";

import { Cardt } from "./Card";
import { Footnotet } from "./Footnote";
import NavBarT from "./navbar";
export const Home: React.FC = () => {

   return( <><NavBarT />
    <Cardt/>
    <About/>
    <Footnotet/></>)
}