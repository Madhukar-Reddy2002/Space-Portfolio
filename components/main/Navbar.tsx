import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/MSLogo-removebg-preview.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Madhukar Reddy
          </span>
        </a>

        <div className="w-[250px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Madhukar-Reddy2002"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
          src="/github3d-removebg-preview.png"
          alt="work icons"
          height={40}
          width={40}
        />
          </a>
          <a
            href="mailto:tomadhukarreddy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
          src="/gmail.png"
          alt="work icons"
          height={40}
          width={40}
        />
          </a>
          <a
            href="https://www.linkedin.com/in/dandumadhukarreddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
          src="/linkedin3d2.png"
          alt="work icons"
          height={40}
          width={40}
        />
          </a>
          <a
            href="https://discord.gg/X8w4z6nf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
          src="/discord3d.png"
          alt="work icons"
          height={40}
          width={40}
        />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
