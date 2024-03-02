import Image from "next/image";
import React, { useState, useRef } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  appLink: string;
  sourceCodeLink: string;
}

const ProjectCardVideo = ({ src, title, description, appLink, sourceCodeLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Define type for videoRef

  const handleMouseEnter = () => {
    setIsHovered(true);
    playVideo();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    pauseVideo();
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Error playing video:", error));
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] md:max-w-[25vw] max-w-[100vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={isHovered}
        loop
        muted
        className="object-contain"
      />

      <div className="relative p-4">
        <div className="flex justify-center items-center mb-4">
          <button
            className={`hover:bg-gray-800 text-white py-2 px-4 rounded ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleMouseEnter}
          >
            Hover me to play
          </button>
        </div>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex space-x-2 w-[100%] justify-between mt-3">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            <Image
              src="/visit3d.png"
              alt="work icons"
              height={40}
              width={40}
            />
          </a>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            <Image
              src="/github3d-removebg-preview.png"
              alt="work icons"
              height={50}
              width={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardVideo;