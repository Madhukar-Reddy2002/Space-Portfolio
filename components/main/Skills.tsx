import {
  Frontend_skill,
  Backend_skill,
  Data_Science,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 z-20 hover:cursor-pointer "
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-col items-center justify-center mt-4 gap-8">
        <div className="text-4xl font-thin italic text-white mb-4">Frontend Development Technologies</div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-8">
        <div className="text-4xl font-thin italic text-white mb-4">Backend Development Technologies</div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 gap-8">
        <div className="text-4xl font-thin italic text-white mb-4">Data Science Technologies</div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Data_Science.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;