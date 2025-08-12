import React, { useEffect } from "react";
import RevealOnScroll from "../components/RevealOnScroll";
const aboutCards = [
  {
    title: "Web Developer",
    icon: "💻",
    desc: "Building modern, responsive web apps with React, Tailwind, and more.",
  },
  {
    title: "Problem Solver",
    icon: "🧠",
    desc: "Enjoys tackling coding challenges and learning new technologies.",
  },
  {
    title: "Team Player",
    icon: "🤝",
    desc: "Collaborates effectively in teams and values clear communication.",
  },
  {
    title: "Lifelong Learner",
    icon: "📚",
    desc: "Always exploring new frameworks, tools, and best practices.",
  },
];

const About = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);
  return (
    <section
      id="About"
      className="min-h-screen w-full bg-gray-950 p-0 sm:p-8 flex flex-col items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center gap-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mt-0">
            Hi, I'm <span className="text-green-400">Aryan</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 text-center">
            I'm a passionate web developer with a love for building beautiful,
            performant, and accessible web applications. I enjoy solving
            problems, collaborating with others, and constantly learning new
            things in tech.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {aboutCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-green-600 rounded-xl shadow-md px-6 py-4 flex flex-col items-center w-40 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <div className="text-lg font-semibold text-green-400 mb-1">
                  {card.title}
                </div>
                <div className="text-gray-300 text-sm text-center">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
