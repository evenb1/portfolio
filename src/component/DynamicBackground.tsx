"use client"; // Enables client-side interactivity

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DynamicBackground = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative h-full w-full ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      {theme === "dark" ? (
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      ) : (
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      )}
    </div>
  );
};

export default DynamicBackground;
