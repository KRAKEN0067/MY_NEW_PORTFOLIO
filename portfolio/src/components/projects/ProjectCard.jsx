import React from "react";
import github from "../../assets/images/github.png";
import RevealOnScroll from "../global/RevealOnScroll";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  technologies = [],
  category = "Project"
}) => {
  return (
    <RevealOnScroll>
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex flex-col h-full">
        
        {/* Project Image */}
        <div className="relative overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={CardTitle}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2">
                <a
                  href={btnHref || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 bg-green-500/90 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                  title="View on GitHub"
                >
                  <FaGithub size={16} />
                </a>
                {titleHref && titleHref !== "/#" && (
                  <a
                    href={titleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-blue-500/90 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              <FaCode className="mr-1" size={12} />
              {category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="mb-3 flex-shrink-0">
            <a
              href={titleHref || "/#"}
              className="block text-xl font-bold text-white hover:text-green-400 transition-colors duration-300 group-hover:text-green-400"
            >
              {CardTitle}
            </a>
          </h3>

          {/* Project Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {CardDescription}
          </p>

          {/* Technology Tags */}
          {technologies.length > 0 && (
            <div className="mb-4 flex-shrink-0">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          {Button && (
            <div className="flex justify-between items-center mt-auto flex-shrink-0">
              <a
                href={btnHref || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-medium rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="mr-2" size={14} />
                View Code
              </a>
              
              {titleHref && titleHref !== "/#" && (
                <a
                  href={titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-medium rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <FaExternalLinkAlt className="mr-2" size={14} />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ProjectCard;
