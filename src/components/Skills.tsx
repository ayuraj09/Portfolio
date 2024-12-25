"use client"
import React from "react";
import { FaCode, FaDatabase, FaCloud, FaPython } from "react-icons/fa";
import { SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiGithub } from "react-icons/si";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: ["JavaScript", "React", "Next.js", "Python", "MongoDB", "C++", "Git"],
    datasets: [
      {
        label: "Proficiency",
        data: [85, 80, 75, 85, 70, 95, 80],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 50,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
        grid: {
          color: "#e2e8f0",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-20 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Icons */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <FaCode className="text-4xl text-blue-500" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiReact className="text-4xl text-blue-400" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-4xl text-gray-800 dark:text-white" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl text-yellow-500" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-500" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGithub className="text-4xl text-gray-800 dark:text-white" />
                <span className="mt-2 text-gray-700 dark:text-gray-300">Git</span>
              </div>
            </div>
          </div>

          {/* Skills Chart */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Proficiency Overview
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <Radar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
