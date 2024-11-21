"use client"
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ShootingStars from "../components/ShootingStars";
import StarBackground from "../components/StarBackground";
import { TimelineDemo } from "../components/TimelineExperience";

export default function Home() {
  return (
    <main className="relative">
    
      <NavBar/>

      <section id="home" className="p-16">
        <Hero/>
      
      </section>
      <section id="projects" className="">
        <ShootingStars/>
        <StarBackground/>
      </section>
      <section id="experience">
        <TimelineDemo/>
      </section>
      <section id="contact">

      </section>
    </main>
  );
}
