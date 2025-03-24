
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { TbBrandTelegram } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jhszijb", "template_nkym2kq", form.current, {
        publicKey: "5BppUKxDqJC_K7ueH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Background animated dots effect
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
    <div id="Contact-Me" className="relative my-10 px-4 sm:px-8 lg:px-16 xl:px-32 py-10 bg-white">
       <NetworkBackground /> {/* Background effect added */}

      <div className="relative z-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Let's Talk
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col sm:flex-row gap-5">
              <input
                data-aos="fade-right"
                data-aos-delay="200"
                className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-1/2 border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                data-aos="fade-left"
                data-aos-delay="200"
                className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-1/2 border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />

            <textarea
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none h-32"
              name="message"
              placeholder="Your Message"
              required
            />

            <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center">
              <button className="flex items-center gap-2 py-3 px-6 bg-amber-400 hover:bg-white hover:text-amber-400 transition-all rounded-md text-lg font-semibold text-stone-700 border border-transparent hover:border-amber-400">
                Send Message <TbBrandTelegram size={24} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
