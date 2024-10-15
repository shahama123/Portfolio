import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/hero image2.png";

const Hero = () => {
  return (
    <div
      id="Home"
      className=" py-5 px-16 lg:py-10 lg:px-32 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 "
    >
      <div className=" 2/3 py-16 px-8 lg:py-32 lg:px-16 ">
        <div className="space-y-8">
          <h1
            data-aos="fade-right"
            data-aos-delay=""
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Hello!
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-xl md:text-2xl lg:text-3xl font-semibold"
          >
            I'm Ayishath <span className="text-yellow-600">Shahama</span>
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-lg md:text-xl lg:text-2xl font-semibold text-stone-600"
          >
            A Web{" "}
            <TypeAnimation
              sequence={["Developer", 1000, "Designer", 1000]}
              speed={5}
              repeat={Infinity}
            />
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="pt-6 lg:pt-12">
          <a
            href="src\assets\resume.pdf" // Update this path
            download="resume.pdf" // This sets the filename for the downloaded file
            className="py-2 px-3 sm:py-3 sm:px-6 md:py-3 border  md:px-8 lg:py-3 lg:px-6 bg-amber-400 rounded-md text-sm sm:text-base md:text-base lg:text-base text-stone-700 hover:bg-transparent hover:border-amber-400 inline-block text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="1/3 ">
        <img
          className="lg:w-[50vh] md:w-[35vh] md:[h-75vh] lg:h-[90vh] w-[40vh] h-[50vh] mt-10 pb-10 rounded-full"
          src={heroImage}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
