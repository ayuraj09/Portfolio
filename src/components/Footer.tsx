import Link from 'next/link'
import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ayush Raj</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024-ayushraj
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ayush-raj-941356230/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition duration-500 shadow-md transform hover:-translate-y-1"
            >
              <FaLinkedin className="mr-2 text-blue-500 hover:text-white transition duration-300" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ayuraj09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-800 hover:text-white transition duration-500 shadow-md transform hover:-translate-y-1"
            >
              <FaGithub className="mr-2 text-gray-500 hover:text-white transition duration-300" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>


          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer