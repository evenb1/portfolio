"use client";
import React from "react";
import StarBackground from "./StarBackground";
import ShootingStars from "./ShootingStars";
import { PinContainer } from "../components/ui/3d-pin";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Import icons

const Projects = () => {
  const projects = [
    {
      title: "Drivetime Rentals",
      description:
        "Drivetime Rentals is a modern car rental platform designed for convenience and performance. Built with Next.js and TypeScript, it features a sleek UI, robust user authentication powered by NextAuth, and a Supabase-backed database for managing bookings. Users can filter cars dynamically based on location, type, and price, ensuring a seamless rental experience.",
      link: "https://your-drivetime-link.com",
      source: "https://github.com/evenb1/DriveTime-Rentals/tree/main/drive-time",
      image: "/drivetime.png",
    },
    {
      title: "Statify",
      description:
        "Statify is a personalized Spotify data visualization app that helps users understand their music habits. Using Spotify's API, Statify provides insights into top tracks, artists, and genres, all wrapped in a clean and responsive UI. Built with Nextjs, Tailwind, and Typescript, it offers an engaging and interactive experience for music enthusiasts.",
      link: "https://your-statify-link.com",
      source: "https://github.com/evenb1/statify",
      image: "/images/statify.png",
    },
    {
      title: "Wilson Sporting Goods",
      description:
        "This website is a responsive and interactive platform designed to showcase Wilson's premium tennis products, including rackets, shoes, balls, bags, and strings. Built with React, Tailwind, and Javascript; The site is optimized for both desktop and mobile users, ensuring a seamless experience across all devices.",
      link: "https://wilson-beige.vercel.app/",
      source: "https://github.com/evenb1/wilson",
      image: "/wilson.png",
    },
  ];

  const DrawOutlineButton = ({
    children,
    ...rest
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
    return (
      <button
        {...rest}
        className="group relative px-6 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
      >
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    );
  };

  return (
    <div id="projects" className="relative w-full  h-auto text-white py-12 px-6 sm:px-10 md:px-20 lg:px-36">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20">
        <StarBackground />
      </div>
      <div className="absolute inset-0 -z-10">
        <ShootingStars />
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
        Projects
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-blue-500"></span>
      </h2>

      {/* Project Cards */}
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-between gap-10`}
          >
            {/* Pin Container with Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex items-center justify-center"
            >
              <PinContainer title={project.link} href={project.link}>
                <div className="flex flex-col items-center justify-center w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </PinContainer>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 text-left"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-base sm:text-lg font-extralight leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-6">
                <DrawOutlineButton onClick={() => window.open(project.link, "_blank")}>
                  <FiExternalLink className="inline-block mr-2" />
                  Live Demo
                </DrawOutlineButton>
                <DrawOutlineButton onClick={() => window.open(project.source, "_blank")}>
                  <FiGithub className="inline-block mr-2" />
                  Source Code
                </DrawOutlineButton>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
