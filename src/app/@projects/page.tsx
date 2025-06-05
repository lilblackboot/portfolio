import React from 'react'
import Card from '@/app/components/Card';


const Projects = () => {
  return (
    <>
      <div className="min-h-screen pb-10 h-fit bg-gradient-to-b from-black via-gray-900 to-gray-800 px-8 flex flex-col items-center justify-start gap-16">
        <h1 className="py-10 flex justify-center items-center text-center w-full text-6xl md:text-8xl font-extrabold bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
          Projects
          {/* Remove the Link if you don't need it, or update the href if you want to link elsewhere */}
          {/* <Link href="/projects/all">
            <CircleArrowRight className="font-bold mt-3 ml-6 w-10 h-10 text-white hover:text-gray-300 transition" />
          </Link> */}
        </h1>
        <div className="mt-10 mx-auto flex gap-8 h-content items-center justify-center flex-wrap">
          <Card
            title="GoGuide"
            linked="https://rough-kangaroo-559.notion.site/GoGuide-Smart-Campus-Navigator-2053398b6fdf8073a2e6d6e80dfdc273?pvs=74"
            imageUrl="/GoGuide.png"
            description="Smart Campus Navigator"
          />
          <Card
            title="Quiz Quarters"
            linked="https://rough-kangaroo-559.notion.site/QuizQuarters-2073398b6fdf80e8bfeccee75a613590"
            imageUrl="/QuizQuarters.png"
            description="Quiz Platform for Students"
          />
          <Card
            title="Post-A-Bid"
            linked="https://rough-kangaroo-559.notion.site/GoGuide-Smart-Campus-Navigator-2053398b6fdf8073a2e6d6e80dfdc273?pvs=74"
            imageUrl="/image.png"
            description="Auction platform"
          />
        </div>
      </div>
    </>
  )
}



export default Projects