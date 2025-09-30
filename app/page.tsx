"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mainText, setMainText] = useState("");
  const fullMainText = "Front-End developer.";
  const fixedSubText = "Building dynamic and responsive web applications.";

  useEffect(() => {
    let currentText = "";
    const timeout = setInterval(() => {
      if (currentText.length < fullMainText.length) {
        currentText += fullMainText[currentText.length];
        setMainText(currentText);
      } else {
        clearInterval(timeout);
      }
    }, 50);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen mt-[-5%]">
      {" "}
      {/* Ajusta el margen superior */}
      <div className="flex flex-row items-center">
        {" "}
        {/* Alinea el texto y la imagen en una fila */}
        <div className="flex flex-col items-start text-left mr-8">
          {" "}
          {/* Ajusta el margen derecho */}
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="animate-blink">{mainText}</span>
          </h1>
          <h2 className="text-2xl font-medium text-white">{fixedSubText}</h2>
          <div className="mt-4 flex space-x-4">
            <a
              href="/CV-TomasLasaldePataro_EN.pdf"
              download="CV_TomasLasaldePataro.pdf"
              className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-900"
            >
              Download CV
            </a>
            <a
              href="mailto:tomylasalde@gmail.com"
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-800"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-lasalde-pataro-03006b1b5/" // URL a la que quieres que lleve el botón
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/linkedin.png" // Asegúrate de que esta ruta sea correcta
                alt="Icon"
                className="w-10 h-10" // Ajusta el tamaño de la imagen según sea necesario
              />
            </a>
          </div>
        </div>
        <div>
          <img src="/Asunto.png" alt="Your photo" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
}
