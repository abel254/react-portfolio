import React from "react";
import AboutImg from "../../assets/coding-man.png";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div id="About" className="text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-12 md:flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img src={AboutImg} alt="about-img" className="h-70 md:h-80" />

          <ul>
            <div className="flex gap-3 py-4">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolores, ullam totam aspernatur aut vero deserunt illo
                  hic voluptatibus quasi doloribus et ut fuga iure architecto
                  autem eveniet dignissimos quaerat. Ea, voluptates.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolores, ullam totam aspernatur aut vero deserunt illo
                  hic voluptatibus
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRightLong size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolores, ullam totam aspernatur aut vero deserunt illo
                  hic voluptatibus quasi
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
