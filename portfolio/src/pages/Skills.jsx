import React from "react";
import Skillcard from "../components/Skills/Skillcard";

import c from "../assets/images/c.png";
import cpp from "../assets/images/cpp.png";
import css from "../assets/images/css.png";
import django from "../assets/images/django.png";
import flask from "../assets/images/flask.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";
import mongodb from "../assets/images/mongodb.png";
import mysql from "../assets/images/mysql.png";
import react from "../assets/images/react.png";
import python from "../assets/images/python.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import expressjs from "../assets/images/expressjs.png";
import git from "../assets/images/git.png";
import downarrow from "../assets/images/downarrow.png";

const Skills = () => {
  const Programming = [
    { src: c, alt: "C", level: 75 },
    { src: cpp, alt: "C++", level: 80 },
    { src: python, alt: "Python", level: 80 },
    { src: javascript, alt: "JavaScript", level: 70 },
    { src: html, alt: "HTML", level: 75 },
    { src: css, alt: "CSS", level: 75 },
  ];

  const Frameworks = [
    { src: flask, alt: "Flask", level: 65 },
    { src: django, alt: "Django", level: 80 },
    { src: expressjs, alt: "ExpressJS", level: 70 },
    { src: tailwindcss, alt: "Tailwind CSS", level: 80 },
    { src: react, alt: "React", level: 75 },
  ];

  const databases = [
    { src: mysql, alt: "MySQL", level: 70 },
    { src: mongodb, alt: "MongoDB", level: 75 },
  ];

  const devops = [
    { src: github, alt: "GitHub", level: 70 },
    { src: git, alt: "git", level: 70 },
  ];

  return (
    <main>
      <section
        id="Skills"
        className="min-h-screen bg-gray-950 px-4 sm:px-6 lg:px-16 py-8 pb-16"
        aria-labelledby="skills-heading"
        tabIndex={-1}
      >
        <header className="w-full">
          <h2
            id="skills-heading"
            className="text-white text-2xl sm:text-3xl font-bold text-center mb-10 underline decoration-green-600 pb-8"
          >
            My Skills & Experience
          </h2>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Programming */}
          <section
            aria-labelledby="programming-heading"
            className="mb-8 md:mb-0"
          >
            <h3
              id="programming-heading"
              className="text-white text-center font-semibold text-lg mb-1"
            >
              Languages
            </h3>
            <div className="flex justify-center pb-1">
              <img src={downarrow} alt="downarrow" height={16} width={16} />
            </div>
            <div className="w-full space-y-4">
              {Programming.map((skill, index) => (
                <Skillcard key={index} skill={skill} />
              ))}
            </div>
          </section>

          {/* Frameworks */}
          <section
            aria-labelledby="frameworks-heading"
            className="mb-8 md:mb-0"
          >
            <h3
              id="frameworks-heading"
              className="text-white text-center font-semibold text-lg mb-1"
            >
              Frameworks
            </h3>
            <div className="flex justify-center pb-1">
              <img src={downarrow} alt="downarrow" height={16} width={16} />
            </div>
            <div className="w-full space-y-4">
              {Frameworks.map((skill, index) => (
                <Skillcard key={index} skill={skill} />
              ))}
            </div>
          </section>

          {/* Databases */}
          <section aria-labelledby="databases-heading" className="mb-8 md:mb-0">
            <h3
              id="databases-heading"
              className="text-white text-center font-semibold text-lg mb-1"
            >
              Databases
            </h3>
            <div className="flex justify-center pb-1">
              <img src={downarrow} alt="downarrow" height={16} width={16} />
            </div>
            <div className="w-full space-y-4">
              {databases.map((skill, index) => (
                <Skillcard key={index} skill={skill} />
              ))}
            </div>
          </section>

          {/* DevOps */}
          <section aria-labelledby="devops-heading" className="mb-8 md:mb-0">
            <h3
              id="devops-heading"
              className="text-white text-center font-semibold text-lg mb-1"
            >
              DevOps
            </h3>
            <div className="flex justify-center pb-1">
              <img src={downarrow} alt="downarrow" height={16} width={16} />
            </div>
            <div className="w-full space-y-4">
              {devops.map((skill, index) => (
                <Skillcard key={index} skill={skill} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Skills;
