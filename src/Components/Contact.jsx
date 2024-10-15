import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "animate.css";

const Contact = () => {
  const form = useRef();

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

  return (
    <div id="contact" className=" px-4 sm:px-6 md:px-10 lg:px-20">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
      >
        <h1 className=" pt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-700 font-semibold hover:cursor-pointer text-center hover:text-cyan-800">
          Let's Talk!
        </h1>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="600"
        className=" pt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-700 font-semibold text-center hover:cursor-pointer hover:text-cyan-800"
      >
        Drop Me a Line or Two, I'm Open for a Collaboration!
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col mt-5 gap-y-5 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 lg:px-20 lg:py-16 md:px-14 md:py-12 px-6 py-8">
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            className="flex flex-col justify-center sm:flex-row gap-5"
          >
            <input
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-[19rem] border border-slate-500"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
            <input
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-[19rem] border border-slate-500"
              type="text"
              name="last_name"
              placeholder="Second Name"
              required
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="650"
            className="flex justify-center"
          >
            <input
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-[39rem] border border-slate-500"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="700"
            className="flex justify-center"
          >
            <textarea
              className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-[39rem] border border-slate-500"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="750"
            className="flex justify-center"
          >
            <button className="py-2 px-4 sm:py-3 sm:px-6 bg-amber-400 hover:bg-white rounded-md text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 border hover:border-amber-400">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
