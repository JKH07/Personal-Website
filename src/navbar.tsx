import 'flowbite';

import { useNavigate } from 'react-router-dom';
export default function NavBarT() {
  const navigate = useNavigate();

  const handleEx = () => {
    
    navigate('/Experience');
   
  };
  const handleHome = () => {
    
    navigate('/');
   
  };
  return (
    <nav className="text-gray-900 focus:ring-lime-200 dark:focus:ring-teal-700 bg-gradient-to-r from-teal-200 to-lime-200 animate-gradient fixed w-full z-20 top-0 start-0 drop-shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          
        </a>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
            <li><a onClick={handleHome} href="#about" className="block py-2 px-3 text-white rounded ">About</a></li>
            <li><a className="block py-2 px-3 text-white rounded " href="JanaHarbCV.pdf" >CV</a></li>
            <li><a onClick={handleHome} className="block py-2 px-3 text-gray-900 ">Home</a></li>
            <li><a  onClick={handleEx} className="block py-2 px-3 text-gray-900 ">Experience</a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
