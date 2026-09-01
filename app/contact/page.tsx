"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "CABA, Argentina",
      color: "text-purple-400",
    },
    {
      icon: "📩",
      label: "Email",
      value: "tomylasalde@gmail.com",
      link: "mailto:tomylasalde@gmail.com",
      color: "text-pink-400",
    },
    {
      icon: "👤",
      label: "LinkedIn",
      value: "linkedin.com/in/tomas-lasalde-pataro-03006b1b5/",
      link: "https://www.linkedin.com/in/tomas-lasalde-pataro-03006b1b5/",
      color: "text-blue-400",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "(+54) 11-6590-1665",
      link: "tel:+5411659-01665",
      color: "text-green-400",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full text-white px-4 py-12">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } max-w-3xl w-full`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Tomás Lasalde Pataro
          </h2>
          <p className="text-lg text-gray-300">
            Front-End Developer ready to bring your ideas to life
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((contact, index) => (
            <div
              key={contact.label}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 h-24">
                <div className="flex items-center space-x-3 h-full">
                  <div className="text-2xl flex-shrink-0">{contact.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-300 mb-1">
                      {contact.label}
                    </h3>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${contact.color} hover:opacity-80 transition-opacity duration-300 break-all text-sm line-clamp-2`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className={`${contact.color} text-sm`}>
                        {contact.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold mb-3">
              Let&apos;s Work Together!
            </h3>
            <p className="text-base mb-4 text-gray-100">
              I&apos;m always excited to discuss new opportunities and
              interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:tomylasalde@gmail.com"
                className="bg-white text-purple-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/tomas-lasalde-pataro-03006b1b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
