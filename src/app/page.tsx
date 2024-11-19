import BlurIn from "@/component/BlurIn";
import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import { WordPullUp } from "@/component/WordPullUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
    
      <NavBar/>

      <section id="home" className="p-16">
        <Hero/>
      
      </section>
      <section id="work" className="">
        
      </section>
      <section id="projects">

      </section>
      <section id="contact">

      </section>
    </main>
  );
}
