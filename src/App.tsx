
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { Home } from "./Home";
import {Experience }from "./Experience";

export function App() {
  return (
    <>
    
    <BrowserRouter basename="/Personal-Website/">
     
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
       <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}
