'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function Main() {
  const [showContent, setShowContent] = useState(false);
 

  // Initial LBB SVG animation
   useGSAP(() => {
     const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgEl = document.querySelector(".svg");
          if (svgEl) svgEl.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  // Content animation after SVG transition
  useGSAP(() => {
    if (!showContent) return;

    const main = document.querySelector(".main");
    const handleMouseMove = (event: Event) => {
      const e = event as MouseEvent;
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.5}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  // Navigation items for parallel routes
 

  return (
    <>
     

      {/* Main content after animation */}
      <div className="main w-full" id="home">
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          {/* Navbar */}
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
            <div className="logo flex gap-7">
              <h3 className="text-4xl -mt-[8px] leading-none text-white">
                Web Developer
              </h3>
              <div className="lines  flex flex-col gap-[5px]">
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Background Images & Text */}
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img
              className="absolute sky  scale-[1.25]  top-0 left-0 w-full h-full object-cover"
              src="./bgimg.png"
              alt=""
            />
            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 ">
              <h1 className="text-[10rem] leading-none -ml-40">Suzan</h1>
              <h1 className="text-[10rem] leading-none ml-30">Mansuri</h1>
              <h1 className="text-[12rem] leading-none -ml-40">lilblackboot</h1>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className="text-xl font-[Helvetica_Now_Display]">
                Scroll Down
              </h3>
            </div>
          </div>
        </div>
        {/* Example About Section */}
      
      </div>
    </>
  );
}

export default Main;
