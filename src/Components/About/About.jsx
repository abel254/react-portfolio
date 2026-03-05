import React from "react";
import AboutImg from "../../assets/coding-man.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-12 md:flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            src={AboutImg}
            alt="about-img"
            className="h-70 md:h-80 md:pr-2"
          />

          <ul>
            <div className="flex gap-3 py-4 border-">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend skills
                </h1>
                <div className="flex flex-wrap mt-3 gap-4">
                  <div className="flex flex-col items-center">
                    <SiJavascript color="#f7df1e" size={40} />
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaReact color="#61dafb" size={40} />
                    <span className="text-sm">React Js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTypescript color="#3178c6" size={40} />
                    <span className="text-sm">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RiTailwindCssFill color="#00A7BA" size={40} />
                    <span className="text-sm">Tailwind css</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaBootstrap color="#7A3BF6" size={40} />
                    <span className="text-sm">Bootstrap</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaHtml5 color="#e34f26" size={40} />
                    <span className="text-sm">Html5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaCss3 color="#1572b6" size={40} />
                    <span className="text-sm">Css3</span>
                  </div>
                </div>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend skills
                </h1>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <FaNodeJs color="#6cc24a" size={40} />
                    <span className="text-sm">Node Js</span>
                  </div>
                </div>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database skills
                </h1>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <SiMongodb color="#47a248" size={40} />
                    <span className="text-sm">MongoDb</span>
                  </div>
                </div>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
