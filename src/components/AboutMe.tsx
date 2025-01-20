import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';
import ShootingStars from './ShootingStars';
import TechStack from './Techstack';

const AboutMe = () => {
  return (
    <div
      id="about"
      className="relative w-full h-auto text-white flex items-center justify-center max-sm:py-10 py-32"
    >
      {/* Star Background */}
      <div className="absolute inset-0 -z-20">
        <StarBackground />
      </div>
      
      {/* Shooting Stars */}
      <div className="absolute inset-0 -z-10">
        <ShootingStars />
      </div>

      {/* About Me Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-lg rounded-full"
        >
          <img
            src="/image.jpg"
            alt="Russom"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Me Text */}
        <div className="flex flex-col items-start max-w-lg">
          {/* Heading */}
          <motion.h2
          
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4 relative"
          >
            About Me
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-blue-500"></span>
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base font-extralight leading-relaxed mb-4"
          >
            I’m a passionate web developer with a knack for
            creating modern, responsive, and user-friendly web experiences. I
            specialize in leveraging cutting-edge technologies to build visually
            appealing and performant websites.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base' font-extralight leading-relaxed mb-2"
          >
            With a focus on clean design and seamless functionality, I aim to
            deliver digital solutions that not only meet but exceed client
            expectations. When I’m not coding, I enjoy exploring new design
            trends and learning about emerging web technologies.
          </motion.p>

          {/* Tech Stack */}
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
