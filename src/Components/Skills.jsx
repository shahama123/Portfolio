import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Core Languages",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "npm", "VS Code"],
    },
  ];

  return (
    <div id="Skills">
      <h1 className=" mt-20 lg:text-6xl md:text-5xl text-4xl text-stone-700 font-semibold text-center hover:text-cyan-800 hover:cursor-pointer">
        Skills
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 my-10 px-20">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold pl-52 mb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-800"
                >
                  {/* Add an icon or visual representation here if desired */}
                  <span className="text-sm font-medium pl-52">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
