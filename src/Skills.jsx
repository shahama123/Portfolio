import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillItem = ({ name, level }) => {
  return (
    <div className="flex items-center mb-6" data-aos="fade-up">
      <div className="mr-3 text-green-500"></div>
      <div>
        <div className="font-medium text-lg">{name}</div>
        <div className="text-gray-500 text-sm">{level}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Background dots and lines
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
    <div id="skills" className="pb-32 px-6 md:px-32 relative">
      <NetworkBackground />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-down">
            Skills
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6" data-aos="fade-down" data-aos-delay="200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front End Skills */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative z-10" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-700 mb-8">Front End</h3>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <SkillItem name="HTML" level="Advanced" />
                <SkillItem name="JavaScript" level="Intermediate" />
                <SkillItem name="React" level="Advanced" />
              </div>
              <div>
                <SkillItem name="CSS" level="Intermediate" />
                <SkillItem name="Tailwind" level="Advanced" />
                <SkillItem name="Bootstrap" level="Advanced" />
              </div>
            </div>
          </div>

          {/* Back End Skills */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative z-10" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-700 mb-8">Back End</h3>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <SkillItem name="MySQL" level="Intermediate" />
                <SkillItem name="Node" level="Basic" />
                <SkillItem name="Mongo DB" level="Intermediate" />
              </div>
              <div>
                <SkillItem name="Python" level="Intermediate" />
                <SkillItem name="Express" level="Basic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
