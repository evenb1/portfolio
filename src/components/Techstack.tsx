"use client";
import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const techStack = [
    { name: "React", icon: "/react.svg" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "JavaScript", icon: "/js.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
  ];

  // Parent and Child Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-row flex-wrap gap-6 mt-5 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates when 30% is in view
    >
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={itemVariants} // Each item animates individually
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
          >
            {tech.name}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
