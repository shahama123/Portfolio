import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="Home"
      className="flex justify-center items-center py-16 md:py-24 text-center"
    >
       <NetworkBackground /> {/* Background effect added */}
      <div className="space-y-3 md:space-y-8">
        <h1 
          className="text-2xl md:text-3xl lg:text-4xl font-bold" 
          data-aos="fade-right"
        >
          Hello!
        </h1>
        <h2 
          className="text-xl md:text-2xl lg:text-3xl font-semibold" 
          data-aos="fade-left" 
          data-aos-delay="200"
        >
          I'm Ayishath <span className="text-yellow-600">Shahama</span>
        </h2>
        <div className="flex justify-center gap-1">
          <p 
            className="text-lg md:text-xl lg:text-2xl font-semibold text-stone-600" 
            data-aos="fade-right" 
            data-aos-delay="400"
          >
            A Web
          </p>
          <p 
            className="text-lg md:text-xl lg:text-2xl font-semibold text-stone-600" 
            data-aos="fade-left" 
            data-aos-delay="600"
          >
            <TypeAnimation
              sequence={["Developer", 1000, "Designer", 1000]}
              speed={5}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="pt-4 md:pt-1" data-aos="zoom-in" data-aos-delay="800">
          <a
            href="/Ayishath Shahama.pdf" // Accessing from public folder
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="py-2 px-4 bg-amber-400 border hover:border-amber-400 hover:bg-white rounded-md text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 inline-block"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
