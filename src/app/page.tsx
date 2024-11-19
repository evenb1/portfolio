import BlurIn from "@/component/BlurIn";
import NavBar from "@/component/NavBar";
import { WordPullUp } from "@/component/WordPullUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
    
    <div className="group relative p-7 px-16 gap-10 flex justify-end">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        fill="white"
        className="w-8 h-8 text-transparent bg-black hover:fill-blue-500 hover:scale-125 duration-200 hover:stroke-blue-500"
      >
        <path
          d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
        ></path>
      </svg>
    </button>
    <button>
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        className="w-8 text-white hover:scale-125 duration-200 hover:stroke-blue-500"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </button>
  </div>

      <section id="home" className="felx flex-row">
        <div className="flex flex-col gap-2 items-start h-screen text-center">
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
