
// import React, { useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { TbBrandTelegram } from "react-icons/tb";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ContactMe = () => {
//   const form = useRef();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_jhszijb", "template_nkym2kq", form.current, {
//         publicKey: "5BppUKxDqJC_K7ueH",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           console.log("message sent");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   // Background animated dots effect
//   const NetworkBackground = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {Array.from({ length: 30 }).map((_, i) => (
//         <div 
//           key={i}
//           className="absolute bg-gray-300 rounded-full h-2 w-2"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             opacity: 0.5
//           }}
//         />
//       ))}
//       {Array.from({ length: 20 }).map((_, i) => (
//         <div 
//           key={i}
//           className="absolute bg-gray-300"
//           style={{
//             height: '1px',
//             width: `${30 + Math.random() * 100}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             opacity: 0.3,
//             transform: `rotate(${Math.random() * 360}deg)`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div id="Contact-Me" className="relative my-10 px-4 sm:px-8 lg:px-16 xl:px-32 py-10 bg-white">
//        <NetworkBackground /> {/* Background effect added */}

//       <div className="relative z-10">
//         {/* Heading */}
//         <div data-aos="fade-up" className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
//             Let's Talk
//           </h1>
//           <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Have a question or want to collaborate? Feel free to drop a message!
//           </p>
//         </div>

//         {/* Contact Form */}
//         <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
//           <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10">
//             <div className="flex flex-col sm:flex-row gap-5">
//               <input
//                 data-aos="fade-right"
//                 data-aos-delay="200"
//                 className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-1/2 border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
//                 type="text"
//                 name="first_name"
//                 placeholder="First Name"
//                 required
//               />
//               <input
//                 data-aos="fade-left"
//                 data-aos-delay="200"
//                 className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full sm:w-1/2 border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
//                 type="text"
//                 name="last_name"
//                 placeholder="Last Name"
//                 required
//               />
//             </div>

//             <input
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
//               type="email"
//               name="user_email"
//               placeholder="Email"
//               required
//             />

//             <textarea
//               data-aos="fade-up"
//               data-aos-delay="400"
//               className="rounded-xl py-4 px-4 sm:py-5 sm:px-5 w-full border border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none h-32"
//               name="message"
//               placeholder="Your Message"
//               required
//             />

//             <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center">
//               <button className="flex items-center gap-2 py-3 px-6 bg-amber-400 hover:bg-white hover:text-amber-400 transition-all rounded-md text-lg font-semibold text-stone-700 border border-transparent hover:border-amber-400">
//                 Send Message <TbBrandTelegram size={24} />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;

import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbBrandTelegram } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  const form = useRef();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Adjust number of network elements based on screen size
  const getNetworkDensity = () => {
    if (windowSize.width < 640) return { dots: 15, lines: 10 };
    if (windowSize.width < 1024) return { dots: 20, lines: 15 };
    return { dots: 30, lines: 20 };
  };

  const NetworkBackground = () => {
    const { dots, lines } = getNetworkDensity();
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: dots }).map((_, i) => (
          <div 
            key={`dot-${i}`}
            className="absolute bg-gray-300 rounded-full h-2 w-2 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={`line-${i}`}
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
  };

  return (
    <div id="Contact-Me" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden bg-white">
      <NetworkBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-10" data-aos="fade-down">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
            Let's Talk
          </h1>
          <div 
            className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6" 
            data-aos="fade-down" 
            data-aos-delay="200"
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Have a question or want to collaborate? Feel free to drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <input
                data-aos="fade-right"
                data-aos-delay="200"
                className="rounded-lg sm:rounded-xl py-3 sm:py-4 px-3 sm:px-4 w-full sm:w-1/2 border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none text-sm sm:text-base"
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                data-aos="fade-left"
                data-aos-delay="200"
                className="rounded-lg sm:rounded-xl py-3 sm:py-4 px-3 sm:px-4 w-full sm:w-1/2 border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none text-sm sm:text-base"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              data-aos="fade-up"
              data-aos-delay="300"
              className="rounded-lg sm:rounded-xl py-3 sm:py-4 px-3 sm:px-4 w-full border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none text-sm sm:text-base"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />

            <textarea
              data-aos="fade-up"
              data-aos-delay="400"
              className="rounded-lg sm:rounded-xl py-3 sm:py-4 px-3 sm:px-4 w-full border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none h-24 sm:h-32 text-sm sm:text-base"
              name="message"
              placeholder="Your Message"
              required
            />

            <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center mt-2 sm:mt-4">
              <button className="flex items-center gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 bg-amber-400 hover:bg-white hover:text-amber-400 transition-all rounded md:rounded-md text-base sm:text-lg font-medium sm:font-semibold text-stone-700 border border-transparent hover:border-amber-400">
                Send Message <TbBrandTelegram size={20} className="sm:text-2xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;