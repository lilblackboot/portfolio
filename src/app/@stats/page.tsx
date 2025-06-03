import React from 'react'
import Image from 'next/image'

function Stats() {
  return (
    <div className="sm:min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 pb-5 h-fit">
      <h1 className="px-4 py-8 text-white text-center w-full text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-bold">
        Stats & Certies
      </h1>
      <div className="mx-auto flex flex-col md:flex-row gap-10 md:gap-18 items-center justify-center flex-wrap w-full max-w-5xl">
        <a
          href="https://leetcode.com/lilblackboot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="mx-auto mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md relative aspect-[2/1]">
            <Image
              src="https://leetcard.jacoblin.cool/lilblackboot?theme=light&font=montserrat&extension=heatmap"
              alt="LeetCode Stats"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </a>
        <a
          href="https://www.github.com/lilblackboot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="mx-auto mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md relative aspect-[2/1]">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=lilblackboot&show_icons=true&theme=light"
              alt="GitHub Stats"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Stats