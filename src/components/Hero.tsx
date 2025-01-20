import React from "react";
import { WordPullUp } from "./WordPullUp";
import BlurIn from "./BlurIn";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'about' not found.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[-100px] h-screen px-4 sm:px-6">
      {/* Main Content */}
      <div className="flex flex-col items-start max-w-sm sm:max-w-lg md:max-w-2xl">
        <WordPullUp
          words="Hi, I'm Russom"
          className="text-[56px] sm:text-6xl lg:text-8xl text-slate-100 font-publicSans font-extrabold mb-1 leading-snug text-left"
        />
        <BlurIn
          word="A Web Developer"
          className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-publicSans font-extralight mb-1 leading-snug text-left"
        />
        <BlurIn
          word="I create modern web experiences."
          className="text-gray-400 text-sm  sm:text-sm lg:text-xl mb-6 leading-relaxed text-left"
        />
      </div>

      {/* Scroll Down SVG Button */}
      <div
        onClick={scrollToAbout}
        className="cursor-pointer text-gray-100 hover:text-gray-300 transition-all mt-8"
        aria-label="Scroll to About Me"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
