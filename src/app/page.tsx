"use client"
import AboutMe from "@/components/AboutMe";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ShootingStars from "../components/ShootingStars";
import StarBackground from "../components/StarBackground";
import { TimelineDemo } from "../components/TimelineExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
    
      <NavBar/>

      <section id="home" className="">
        <Hero/>
      
      </section>
      
      <section id="about" className="py-9">
      <AboutMe/>
      </section>
      <section id="projects" className="">
        <Projects/>
      </section>
      {/* <section id="experience">
        <TimelineDemo/>
      </section> */}
      <section id="contact">
        <ContactMe/>
      </section>
      <Footer/>
    </main>
  );
}
