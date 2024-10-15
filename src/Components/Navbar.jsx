import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex justify-between items-center  px-10 py-5">
      <div>
        <h1 className="text-2xl font-bold">SHAHAMA</h1>
      </div>

      <div className="lg:hidden text-2xl">
        <button onClick={handleToggle}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <ul
        className={`lg:flex lg:items-center lg:gap-14 text-lg cursor-pointer fixed text-stone-700 right-0 
                    ${
                      isMenuOpen
                        ? "flex flex-col items-center py-10 absolute top-20 left-0 max-w-full bg-white z-50  "
                        : "hidden "
                    } lg:static lg:flex-row `}
      >
        <li className="py-2">
          <a href="#Home" onClick={handleToggle}>
            Home
          </a>
        </li>
        <li className="py-2">
          <a href="#About" onClick={handleToggle}>
            About Me
          </a>
        </li>
        <li className="py-2">
          <a href="#Skills" onClick={handleToggle}>
            Skills
          </a>
        </li>
        <li className="py-2">
          <a href="#Project" onClick={handleToggle}>
            Project
          </a>
        </li>
        <li className="py-2">
          <a href="#contact" onClick={handleToggle}>
            Contact Me
          </a>
        </li>

        <div className="">
          <a
            href="src\assets\resume.pdf" // Update this path
            download="resume.pdf" // This sets the filename for the downloaded file
            className="py-2 px-4  bg-amber-300  hover:bg-amber-400  rounded-md text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 inline-block text-center"
          >
            Download Resume
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
