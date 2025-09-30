"use client";

import { useState, useEffect } from "react";

const MyProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Restaurant Web",
      description:
        "This project is a REST API built with Node.js, Express and MongoDB, designed to manage dishes, users, orders and audits for a restaurant. It includes JWT authentication, image upload, and Swagger documentation.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      githubLink: "https://github.com/tomylasalde/Restaurant-Web",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-8 mt-[-8%]">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } max-w-6xl w-full`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-16">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div
                    className={`h-1 w-16 bg-gradient-to-r ${project.color} rounded-full`}
                  ></div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:opacity-90 transition-opacity duration-300`}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Projects Section */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm">
              I&apos;m constantly working on new projects. Stay tuned for
              updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
