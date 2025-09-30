"use client";

import { useState, useEffect } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS3", "JavaScript", "Python", "Java"],
      color: "bg-purple-600",
    },
    {
      title: "Frameworks",
      skills: ["Angular", "React", "Next.js"],
      color: "bg-pink-600",
    },
    {
      title: "Databases",
      skills: ["SQL"],
      color: "bg-blue-600",
    },
    {
      title: "Version Control",
      skills: ["Git", "Github"],
      color: "bg-green-600",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-8 mt-[-8%]">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl">
          Here are the technologies and tools I work with to bring ideas to
          life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <h3
                  className={`text-xl font-semibold mb-4 pb-2 border-b-2 ${category.color.replace(
                    "bg-",
                    "border-"
                  )}`}
                >
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${
                          categoryIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div
                        className={`${category.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300 text-center`}
                      >
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
