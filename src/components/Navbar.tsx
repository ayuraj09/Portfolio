import Link from 'next/link'
import React from 'react'
import { FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className = "sticky top-0 bg-blue-100 z-50" >
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ayush Raj</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-gray-900 relative group transition duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={"/about"}
              className="mr-5 hover:text-gray-900 relative group transition duration-300"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={"/skills"}
              className="mr-5 hover:text-gray-900 relative group transition duration-300"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={"/contact"}
              className="mr-5 hover:text-gray-900 relative group transition duration-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <a href="/Assets/CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-900 hover:text-cyan-200 rounded-lg text-base mt-4 md:mt-0 mr-5 shadow-md transform transition duration-300">
              <FaFileAlt className="mr-2 text-gray-600 hover:text-cyan-200 transition duration-300" />
              Resume
            </button>
          </a>
        </div>
      </header>
  </div>
  )
}

export default Navbar