import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import employee_payroll1 from '../assets/images/projectcardimages/employee_payroll1.png'
import weatherapp from '../assets/images/projectcardimages/weatherapp.png'



const Projects = () => {
  const projects = [
    {
      image:employee_payroll1,
      CardTitle: "Employee Management System",
      titleHref: "/#",
      btnHref: "https://github.com/KRAKEN0067/employee-payroll-system",
      CardDescription:
        "Employee Payroll System made using django Framework. Can 'add Employee, Department, Role, Mark attendance, add salary structure, add Bonus, add deductions, process payroll, manage Employee List'",
      Button: "View Details",
    },
    {
      image:weatherapp,
      CardTitle: "Weather App",
      titleHref: "",
      btnHref: "https://github.com/KRAKEN0067/weatherapp",
      CardDescription:
        "This Weather app displays weather info according to the selected city. Made using Flask Framework",
      Button: "https://github.com/KRAKEN0067/weatherapp",
    },
  ];

  const cards = projects.map((project, index)=>{
    <ProjectCard key={index} {...project}/>
  })

  return (
    <div>
      <section id="Projects" className="min-h-screen bg-gray-950 p-8 sm:p-16">
        <h2 className="pb-8 text-4xl font-bold mb-8 text-center text-white underline decoration-green-600 mt-16">
          My Projects
        </h2>

        <div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Projects;
