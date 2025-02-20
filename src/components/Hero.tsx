"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image'; 

const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="text-gray-600 dark:text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900 dark:text-white">
              Hello Everyone, I am a
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Coder', '', 'Problem Solver'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-16 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="mb-8 leading-relaxed text-gray-500 dark:text-gray-400">
              Passionate developer with a love for building impactful digital solutions. 
              Let&apos;s innovate together and bring ideas to life!
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900">
                  <Image
                    src="/Assets/Self.jpeg"
                    alt="hero"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent rounded-full opacity-0 hover:opacity-80 transition duration-500">
                <div className="absolute bottom-6 w-full text-center text-white font-semibold text-lg">
                  Ayush Raj
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
