import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   

  return (
    <nav className="bg-red-700 p-4 h-20 ">
      <div className="container  mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="h-[70px] -mt-5 w-[70px]">
          <Link to="/">
            <img src="Images/logo.png" alt="Logo" className="rounded-full w-full h-full object-cover mt-2" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-white text-lg">
          <Link to="/home" className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black">Home</Link>
       
              {/* <a href="#onAboutUsClick" className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black">About us</a> */}
              
          <a href="#aboutus-section"  className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black" >About Us</a>
        

          {/* <li className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black">About us </li>  */}
          <a href="#Contact" className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black">Contact</a>
          <a href="/" className="block px-4 py-2 text-center rounded hover:bg-[#EEE2DC] hover:text-black">Logout</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-[#272727] z-10`}>
        <ul className="text-white text-lg mt-4 space-y-2">
          <li>
            <Link to="/home" className="block px-4 py-2 text-center rounded hover:bg-red-800 hover:text-white">Home</Link>
          </li>
          <li>
            <a href="#Aboutus" className="block px-4 py-2 text-center rounded hover:bg-red-800 hover:text-white">About us</a>
          </li>
          <li>
            <a href="#Contact" className="block px-4 py-2 text-center rounded hover:bg-red-800 hover:text-white">Contact</a>
          </li>
          <li>
            <a href="/" className="block px-4 py-2 text-center rounded hover:bg-red-800 hover:text-white">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
