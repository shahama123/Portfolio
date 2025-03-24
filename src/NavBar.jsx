import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white  flex justify-between items-center px-10 py-5 z-50">
      <div>
      <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 uppercase relative">
        SHAHAMA
        <span className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full"></span>
      </h1>
       
      </div>
      <div>
        <ul className="flex gap-14">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About-Me">About Me</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Contact-Me">Contact Me</a></li>
        </ul>
      </div>
      <div>
        <a
          href="/Ayishath Shahama.pdf" // Accessing from public folder
          download="Ayishath Shahama.pdf"
          className="py-2 px-4 bg-amber-400 border hover:border-amber-400 hover:bg-white rounded-md text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 inline-block text-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
