import React, { useEffect, useState } from "react";
import coding from "../../assets/coding.png";

const Home = () => {
  const texts = ["Hi, I am Abel"];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[0].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev & texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {currentText}
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I’m currently excited about learning more on the React library with
          the aim of participating in creating real life projects that solve
          modern problems in this era of technology.
        </p>
        <button className="bg-[#465697] mt-5 md:md-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 rounded-3xl hover:opacity-85 duration-300 hover:scale-105 font-semibold">
          Contact Me
        </button>
      </div>
      <div>
        <img src={coding} alt="man-coding" className="w-3/5" />
      </div>
    </div>
  );
};

export default Home;
