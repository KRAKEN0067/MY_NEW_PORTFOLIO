import React from "react";
import github from "../../assets/images/github.png";

const ProjectCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="mb-6 sm:mb-8 rounded-2xl bg-gray-900 border border-green-600 p-4 sm:p-6 hover:scale-[1.02] transition-transform duration-300 w-full max-w-sm mx-auto hover:shadow-lg shadow-green-600">
      
      {/* Project Image */}
      <img
        src={image}
        alt=""
        className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
      />

      {/* Project Content */}
      <div className="text-center">
        <h3>
          <a
            href={titleHref || "/#"}
            className="block text-lg sm:text-xl font-semibold text-white hover:text-green-500"
          >
            {CardTitle}
          </a>
        </h3>

        <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
          {CardDescription.slice(0, 70)+" ..."}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-full border border-green-600 p-2 hover:bg-green-600 transition duration-300"
          >
            <img
              src={github}
              alt="GitHub link"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
