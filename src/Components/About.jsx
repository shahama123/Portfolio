import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div id="About">
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
        className="lg:text-6xl md:text-5xl text-4xl text-stone-700 font-semibold
        text-center hover:cursor-pointer hover:text-cyan-800"
      >
        {" "}
        About Me
      </h1>
      <div className="flex justify-between lg:px-40 lg:py-16 md:px-14 md:py-12 px-10 py-8">
        <div className="px-10 w-2/3">
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
            className=" lg:text-lg md:text-base text-sm text-stone-600"
          >
            I am a passionate React web developer with a knack for creating
            dynamic and responsive user interfaces. My journey in web
            development has equipped me with a strong foundation in JavaScript,
            HTML, CSS, and modern libraries like React and Tailwind CSS. I enjoy
            turning complex problems into simple, beautiful, and intuitive des
            goal is to build impactful web applications that offer seamless user
            experiences while staying up-to-date with the latest industry trends
            and best practices.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            className=" flex justify-center lg:text-3xl text-2xl gap-5 lg:mt-20 mt-10"
          >
            <a href="https://www.instagram.com/_sha__ma">
              <FaInstagram className="text-pink-600 transform transition-transform duration-500 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/ayishath-shahama-3206b029a">
              <FaLinkedin className="text-blue-800 transform transition-transform duration-500 hover:scale-110" />
            </a>
            <a href="https://github.com/shahama123">
              <FaGithub className="transform transition-transform duration-500 hover:scale-110" />
            </a>
            <a href="mailto: shaamashaama28@gmail.com">
              <MdEmail className="text-blue-300 transform transition-transform duration-500 hover:scale-110" />
            </a>
            <a href="https://wa.me/+919778076740">
              <FaWhatsapp className="text-green-500 transform transition-transform duration-500 hover:scale-110" />
            </a>
            <a href="tele: 9778076740">
              <FaPhone className="text-blue-400 transform transition-transform duration-500 hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="w-1/3">
          <img
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
            className="w-[900px] h-[300px] rounded-xl"
            src="https://via.placeholder.com/300"
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
