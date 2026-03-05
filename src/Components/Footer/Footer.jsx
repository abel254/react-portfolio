import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div
      id="Footer"
      className="bg-[#465697]"
    >
      <div className="flex justify-around text-white py-10 md:p-12 items-center">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel free to reach out
          </h3>
        </div>

        <div className="flex gap-2 md:gap-4">
          <a href="https://github.com/abel254" target="_blank">
            <div className="group border-1 border-white rounded-full p-2 hover:bg-white duration-300">
              <FaGithub
                
                className="w-5 h-5 md:w-8 md:h-8 group-hover:text-black duration-300"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/abel-muema-9b1140216/"
            target="_blank"
          >
            <div className="group border-1 border-white rounded-full p-2 hover:bg-white duration-300">
              <FaLinkedin
                className="w-5 h-5 md:w-8 md:h-8 group-hover:text-black duration-300"
              />
            </div>
          </a>
        </div>
      </div>

      <p className="text-xs md:text-md text-center text-white pb-2">&copy; {currentYear}. abelmuema353@gmail.com</p>
    </div>
  );
};

export default Footer;
