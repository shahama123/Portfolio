import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Card = ({
  imageUrl,
  title,
  description,
  btn1,
  btn2,
  demoUrl,
  gitUrl,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="w-64  h-auto rounded-lg overflow-hidden shadow-2xl bg-white transform transition-transform duration-500 hover:scale-105"
    >
      <div>
        <img
          className="w-full h-40 object-cover object-center"
          src={imageUrl}
        />
      </div>
      <div className="px-6 py-4">
        <h4 className="font-bold text-gray-700 text-xl mb-2 text-center">
          {title}
        </h4>
        <p className="text-gray-700 text-xs mb-4">{description}</p>
        <div className="flex justify-cente text-centerr gap-5  pb-3 font-normal  ">
          <a
            href={demoUrl}
            className="flex gap-1 py-2 px-4 bg-amber-400 text-center  rounded-md  lg:text-xs md:text-xs text-xs text-stone-700  hover:bg-amber-300"
          >
            Preview
            <FaArrowUpRightFromSquare className="text-center text-xs" />
          </a>

          <a
            href={gitUrl}
            className="flex gap-1 py-2 px-4 bg-amber-400   rounded-md lg:text-xs md:text-xs text-xs text-stone-700  hover:bg-amber-300"
          >
            GitHib
            <FaGithub className="text-center text-base" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
