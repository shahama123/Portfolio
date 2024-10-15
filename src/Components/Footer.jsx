import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-slate-400 bg-black lg:px-40 lg:py-5 md:px-20 md:py-3 sm:px-2 sm:py-3 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <p className="lg:text-lg md:text-base sm:text-sm hover:cursor-pointer">
            © 2024 Ayishath Shahama. All rights reserved.
          </p>
        </div>
        <div className=" flex justify-center lg:text-xl md:text-lg sm:text-base  gap-5 ">
          <a href="https://www.instagram.com/_sha__ma">
            <FaInstagram className="text-slate-400 transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/ayishath-shahama-3206b029a">
            <FaLinkedin className="text-slate-400 transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="https://github.com/shahama123">
            <FaGithub className="text-slate-400 transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="tele: 9778076740">
            <FaPhone className="text-slate-400 transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="mailto: shaamashaama28@gmail.com">
            <MdEmail className="text-slate-400 hover:scale-110" />
          </a>
          <a href="https://wa.me/+919778076740">
            <FaWhatsapp className="text-slate-400 transform transition-transform duration-500 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
