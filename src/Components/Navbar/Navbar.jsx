import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="md:flex flex-wrap md:justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${menu ? "flex" : "hidden"} flex-col py-2 font-semibold mt-4 border-t-1 border-white  px-2 bg-opacity-10 md:border-none text-start md:bg-transparent md:static md:mx-0 md:flex md:flex-row md:gap-6 transition ease-out duration-300`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
        <div className="flex gap-2 mt-4 md:-mt-2">
          <a href="https://github.com/abel254" target="_blank">
            <div className="group border-1 border-white rounded-full p-2 hover:bg-white duration-300">
              <FaGithub
                size={20}
                className="group-hover:text-black duration-300"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/abel-muema-9b1140216/"
            target="_blank"
          >
            <div className="group border-1 border-white rounded-full p-2 hover:bg-white duration-300">
              <FaLinkedin
                size={20}
                className="group-hover:text-black duration-300"
              />
            </div>
          </a>
        </div>
      </ul>

      {showMenu ? (
        <MdMenu
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <MdClose
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
