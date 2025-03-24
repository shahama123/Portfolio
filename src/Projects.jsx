import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MediaCard from "./Components/MediaCard";
import indiaTaxProfessionals from "./assets/IndiaTaxProfessionals.png";
import trendora from "./assets/trendora.png";
import savory from "./assets/savory.png";
import portfolio from "./assets/Portfolio.png";
import fortViewSuitesClone from "./assets/FortViewSuitesClone.png";
import netflixClone from "./assets/NetflixClone.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [showMore, setShowMore] = useState(false);

  // Background effect (same as Skills.js and AboutMe.js)
  const NetworkBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-300 rounded-full h-2 w-2"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5,
          }}
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-300"
          style={{
            height: "1px",
            width: `${30 + Math.random() * 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );

  const projects = [
    {
      image: indiaTaxProfessionals,
      title: "India Tax Professionals",
      description:
        "India Tax Professional is a tax management website built with React.js, offering tools for calculating taxes, generating reports, and managing financial records efficiently.Developed an admin module for a cloud-based e-commerce platform,enabling efficient management of service providers, employees,customers, and external agencies. Streamlined operations andenhanced coordination of tax-related services across India,supporting business growth.",
      demoUrl: "https://www.indiataxprofessionals.com/",
    },
    {
      image: trendora,
      title: "Trendora",
      description:
        "Trendora is a responsive e-commerce site built with the MERN stack, featuring product exploration, filtering, secure payments (Stripe, Razorpay), and an admin dashboard for efficient management.",
      gitUrl: "https://github.com/shahama123/E-Commerce.git",
      demoUrl: "https://e-commerce-shahama.vercel.app/",
    },
    {
      image: savory,
      title: "Savory",
      description:
        "Savory is a responsive food recipe finder website where users can search for recipes by dish, categories, or ingredients using React.js, Tailwind CSS & TheMealDB.",
      gitUrl: "https://github.com/shahama123/Savory.git",
      demoUrl: "https://savory-shahama.vercel.app/",
    },
  ];

  const moreProjects = [
    {
      image: portfolio,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience, built using React.js and Tailwind CSS.",
      gitUrl: "https://github.com/shahama123/Portfolio",
      demoUrl: "https://portfolio-shahama.vercel.app/",
    },
    {
      image: fortViewSuitesClone,
      title: "Fortview Suites Clone",
      description:
        "A responsive clone of a stay hotel website, providing a seamless user experience across devices. The site allows users to explore hotelrooms, amenities, and booking options,replicating a modern hotel booking interface, built using React.js and Tailwind CSS.",
      gitUrl: "https://github.com/shahama123/Fortview",
      demoUrl: "https://fortview-suites-clone-shahama.netlify.app/",
    },
    {
      image: netflixClone,
      title: "Netflix Clone UI Design",
      description:
        "A responsive Netflix Clone UI built with React.js and Tailwind CSS, featuring dynamic movie listings from the TMDB API. Users can explore trending movies, and enjoy a sleek, modern interface. The project showcases smooth animations, responsive design, and optimized performance.",
      gitUrl: "https://github.com/shahama123/Netflix-Clone",
      demoUrl: "https://netflix-clone-shahama.vercel.app/",
    },
  ];

  return (
    <div
      id="Projects"
      className="relative px-4 md:px-8 lg:px-16 xl:px-32 pb-32 bg-white"
    >
      <NetworkBackground /> {/* Background effect added */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Featured Projects
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my development
            skills and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 300}>
              <MediaCard {...project} />
            </div>
          ))}

          {showMore &&
            moreProjects.map((project, index) => (
              <div
                key={index + projects.length}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <MediaCard {...project} />
              </div>
            ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 bg-amber-400 hover:bg-white border border-amber-400 text-stone-700 font-semibold rounded-md transition-all"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
