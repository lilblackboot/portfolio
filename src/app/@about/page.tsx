import React from 'react'
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

function page() {
  return (
    <>
    <div className="w-full min-h-screen h-content flex items-center justify-center bg-black">
            <div className="cntnr justify-center text-white w-full h-[80%]">
              
              <div className="rg w-2/3 py-30">
                <h1 className="text-6xl">building, beautifully</h1>
                <p className="mt-10 text-lg font-Montserrat">
                  Hi, i am Suzan Mansuri, a web developer and designer. I am about solving real world problems in the most asthetically pleasing way. 
                </p>
                <p className="mt-5 text-lg font-Montserrat">
                    I have built,learned and designed so many things. keep scrolling to take a look (or download my resume if you are a boring types)
                </p>
                <a href="/Resume.pdf" download>
                <button className="bg-yellow-500 px-10 py-5 text-black mt-10 text-4xl">
                  Resume
                </button></a>
              </div>
            </div>
            <div className="btmbar h-[30px] text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
                
            </div>
          </div>
    </>
  )
}

export default page
