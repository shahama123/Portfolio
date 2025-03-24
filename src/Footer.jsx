import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white bg-black py-10 md:px-20 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-20 gap-5">
        <div>
          <p className="lg:text-lg md:text-base text-xs hover:cursor-pointer">
            © {currentYear} Ayishath Shahama. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center lg:text-xl md:text-lg sm:text-base gap-5">
          <a href="https://www.instagram.com/_sha__ma">
            <FaInstagram className="text-white transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/ayishath-shahama-3206b029a">
            <FaLinkedin className="text-white transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="https://github.com/shahama123">
            <FaGithub className="text-white transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="tel:+919778076740">
            <FaPhone className="text-white transform transition-transform duration-500 hover:scale-110" />
          </a>
          <a href="mailto:shaamashaama28@gmail.com">
            <MdEmail className="text-white hover:scale-110" />
          </a>
          <a href="https://wa.me/+919778076740">
            <FaWhatsapp className="text-white transform transition-transform duration-500 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
