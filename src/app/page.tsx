import BlurIn from "@/component/BlurIn";
import NavBar from "@/component/NavBar";
import { WordPullUp } from "@/component/WordPullUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
    
      <NavBar/>
      <section id="home" className="felx flex-row">
        <div className="flex flex-col gap-2 items-start text-center h-screen justify-center">
          <WordPullUp words="Hi, Im Russom" className="text-6xl  text-gray-50 font-publicSans"/>
          <BlurIn word="Web Developer" className="text-gray-100 font-publicSans text-6xl"/>
        </div>
        <div>
          
        </div>
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
