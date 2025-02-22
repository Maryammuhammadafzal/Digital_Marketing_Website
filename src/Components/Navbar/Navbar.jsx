import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
   

<nav className=" z-10  bg-black w-full overflow-x-hidden  h-[100px] mx-auto flex justify-center items-center ">
  <div className="w-[80%] max-lg:w-full flex flex-wrap items-center justify-between p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span className="self-center text-3xl font-extrabold whitespace-nowrap text-wrap text-[#9C27B0]">LOGO</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block text-lg py-2 px-3 text-white bg-[#9C27B0] rounded-sm md:bg-transparent md:text-[#9C27B0] md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block text-lg py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-[#9C27B0] md:p-0 text-white  hover:bg-gray-700 hover:text-white">About</Link>
        </li>
        <li>
          <Link to="/services" className="block text-lg py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-[#9C27B0] md:p-0 text-white  hover:bg-gray-700 hover:text-white">Our Services</Link>
        </li>
        <li>
          <Link to="/work" className="block text-lg py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-[#9C27B0] md:p-0 text-white  hover:bg-gray-700 hover:text-white">Case Study</Link>
        </li>
        <li>
          <Link to="/" className="block text-lg py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-[#9C27B0] md:p-0 text-white  hover:bg-gray-700 hover:text-white">Blog</Link>
        </li>
        <li>
          <Link to="/contact" className="block text-lg py-2 px-3  rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-[#9C27B0] md:p-0 text-white  hover:bg-gray-700 hover:text-white">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
