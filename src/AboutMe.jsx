import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  // Background dots and lines (Same as in Skills.js)
  const NetworkBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          className="absolute bg-gray-300 rounded-full h-2 w-2"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5
          }}
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute bg-gray-300"
          style={{
            height: '1px',
            width: `${30 + Math.random() * 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );

  return (
    <div id="About-Me" className="relative px-6 md:px-32 py-0 md:py-24">
      <NetworkBackground /> {/* Background effect added */}

      <div className="text-center mb-10 relative z-10">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
          data-aos="fade-up"
        >
          About Me
        </h1>
        <div 
          className="w-24 h-1 bg-amber-400 mx-auto mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center relative z-10">
        <div data-aos="fade-right">
          <p className="text-lg text-gray-700 leading-relaxed">
            A highly motivated and results-driven developer with one year of hands-on 
            experience in software development. Proficient in key programming languages 
            such as JavaScript, Python, and HTML/CSS, with a strong understanding of 
            web development frameworks and tools. Adept at collaborating in agile 
            environments, troubleshooting complex issues, and optimizing code for 
            performance and scalability.
          </p>
        </div>

        {/* Uncomment this if you want to add the image later */}
        {/* <div data-aos="fade-left">
          <img
            className="w-40 rounded-xl"
            src="https://via.placeholder.com/300"
            alt="about-image"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
