import React from "react";
import Card from "./Card";
import card1 from "../assets/netflix.png";
import card2 from "../assets/savory.png";
import card3 from "../assets/fortview.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="Project">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-stone-700 font-semibold text-center hover:cursor-pointer  mt-20 hover:text-cyan-800">
          Portfolio
        </h1>
      </div>
      <h1
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine"
        className="lg:text-3xl md:text-2xl text-xl mb-10 text-stone-700 font-semibold text-center my-5 hover:cursor-pointer hover:text-cyan-800"
      >
        Personal Projects
      </h1>

      <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 lg:pl-40 md:pl-40 gap-10">
        <Card
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="600"
          imageUrl={card1}
          title="Netflix Clone"
          description="Developed a Netflix clone UI using React.js and the TMDB API.
          Implemented ui components that mimic the Netflix layout,
          integrating data fetching for dynamic content display."
          demoUrl="https://netflix-clone-shahama.vercel.app/"
          gitUrl="https://github.com/shahama123/Netflix-Clone.git"
        />
        <Card
          data-aos="zoom-in"
          data-aos-duration="5000"
          data-aos-delay="900"
          imageUrl={card2}
          title="Savory"
          description="Savory is a responsive food recipe finder website where users can search for recipes by
          dish, categories or ingredients  using React.js,Tailwind CSS & TheMealDB"
          demoUrl="https://savory-shahama.vercel.app/"
          gitUrl="https://github.com/shahama123/Savory.git"
        />
        <Card
          data-aos="zoom-in"
          data-aos-duration="7000"
          data-aos-delay="1200"
          imageUrl={card3}
          title="Fortview Suites Clone"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure praesentium ipsam voluptatem, nisi inventore ad natus est nostrum iusto culpa enim repudiandae odio porro."
          demoUrl="https://fortview-suites-clone-shahama.netlify.app/"
          gitUrl="https://github.com/shahama123/Fortview.git"
        />

        <Card
          data-aos="zoom-in"
          data-aos-duration="9000"
          data-aos-delay="1500"
          imageUrl={card3}
          title="Trippy"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure praesentium ipsam voluptatem, nisi inventore ad natus est nostrum iusto culpa enim repudiandae odio porro."
          demoUrl="https://fortview-suites-clone-shahama.netlify.app/"
          gitUrl="https://github.com/shahama123/trippy.git"
        />
        <Card
          data-aos="zoom-in"
          data-aos-duration="11000"
          data-aos-delay="1800"
          imageUrl={card3}
          title="SwiftServe"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure praesentium ipsam voluptatem, nisi inventore ad natus est nostrum iusto culpa enim repudiandae odio porro."
          demoUrl="https://fortview-suites-clone-shahama.netlify.app/"
          gitUrl="https://github.com/shahama123/SwiftServe.git"
        />
        <Card
          data-aos="zoom-in"
          data-aos-duration="13000"
          data-aos-delay="2100"
          imageUrl={card3}
          title="Wanderer"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure praesentium ipsam voluptatem, nisi inventore ad natus est nostrum iusto culpa enim repudiandae odio porro."
          demoUrl="https://fortview-suites-clone-shahama.netlify.app/"
          gitUrl="https://github.com/shahama123/Wanderer.git"
        />
      </div>
    </div>
  );
};
export default Projects;
