
import React from 'react'
import { WordPullUp } from './WordPullUp'
import BlurIn from './BlurIn'

const Hero = () => {
  return (
    <div className='flex flex-row gap-10 justify-center'>
        <div className="flex flex-col gap-2 items-start h-screen text-center">
        

          <WordPullUp words="Hi, Im Russom" className="text-6xl  text-gray-100 font-publicSans"/>
          <BlurIn word="A Web Developer" className="text-gray-100 font-publicSans text-6xl"/>
          
        </div>
        {/* <div className=" w-48 h-48 rounded-lg border border-gray-300 shadow-md bg-gray-50 overflow-hidden">
            <img
                src="/default-placeholder.png"
                alt="Placeholder"
                className="object-cover w-full h-full"
            />
            </div> */}
    </div>
  )
}

export default Hero