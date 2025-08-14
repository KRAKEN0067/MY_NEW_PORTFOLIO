import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import employee_payroll1 from '../assets/images/projectcardimages/employee_payroll1.png'
import weatherapp from '../assets/images/projectcardimages/weatherapp.png'
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      image: employee_payroll1,
      CardTitle: "Employee Management System",
      titleHref: "/#",
      btnHref: "https://github.com/KRAKEN0067/employee-payroll-system",
      CardDescription:
        "Employee Payroll System made using django Framework. Can 'add Employee, Department, Role, Mark attendance, add salary structure, add Bonus, add deductions, process payroll, manage Employee List'",
      Button: "View Details",
      technologies: ["Django", "Python", "SQLite", "Bootstrap"],
      category: "Full-Stack"
    },
    {
      image: weatherapp,
      CardTitle: "Weather App",
      titleHref: "",
      btnHref: "https://github.com/KRAKEN0067/weatherapp",
      CardDescription:
        "This Weather app displays weather info according to the selected city. Made using Flask Framework",
      Button: "https://github.com/KRAKEN0067/weatherapp",
      technologies: ["Flask", "Python", "HTML/CSS", "Weather API"],
      category: "Web App"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Projects Grid Section */}
      <section id="Projects" className="relative py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              web applications, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Call to Action */}
          <br />
          <br />
          <br />
          <hr className="text-gray-500"/>
          <br />
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center p-4 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                <FaRocket className="text-green-400" size={24} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Have a Project in Mind?
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new and challenging projects. 
                Let's collaborate to bring your ideas to life!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#Contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Start a Project
                </a>
                <a
                  href="https://github.com/KRAKEN0067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="mr-2" />
                  View More on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
