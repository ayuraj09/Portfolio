import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-20 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12">
        A tech enthusiast with a passion for software development(SDE), data science. I enjoy solving real-world problems through innovative software solutions and data-driven insights.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  BS in Economic Sciences
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Indian Institute of Technology, Kanpur (IITK) <br />
                </p>
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Software Developer Intern
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ksham Innovation <br />
                  June 2024 - July 2024
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  - Developed a responsive, user-friendly website using Next.js and MongoDB.<br />
                  - Deployed the app with CI/CD pipelines, improving the company's online presence and user engagement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
