import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function page() {
  return (
    <>
    <section id='skills' className="w-full gap-25 min-h-screen h-content flex-col flex items-center justify-center bg-black relative">
        <h1 className="text-8xl stroke-4  text-white">
          Skills
        </h1>
        <div className={`flex gap-6 justify-center px-20 items-baseline-last text-white ${montserrat.className}`}>
          <div className="flex w-1/3  flex-col items-center">
            
            <div className="flex flex-wrap  border-gray-300 gap-3 justify-center">
              <SkillTab label="React" />
              <SkillTab label="Next.js" />
              <SkillTab label="Tailwind CSS" />
              <SkillTab label="HTML5" />
              <SkillTab label="CSS3" />
              <SkillTab label="JavaScript" />
              <SkillTab label="TypeScript" />
              <SkillTab label="Redux" />
              <SkillTab label="Framer Motion" />
              <SkillTab label="GSAP" />
            </div>
            <h3 className="text-l my-4 text-gray-400">Frontend</h3>
          </div>
          <div className="flex w-1/3  flex-col items-center">
            
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillTab label="Node.js" />
              <SkillTab label="Express.js" />
              <SkillTab label="MongoDB" />
              <SkillTab label="PostgreSQL" />
              <SkillTab label="Firebase" />
              <SkillTab label="REST APIs" />
              <SkillTab label="Prisma" />
            </div><h3 className="text-l my-4 text-gray-400">Backend</h3>
          </div>
          <div className="flex w-1/3  flex-col items-center">
            
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillTab label="Git" />
              <SkillTab label="Figma" />
             
              <SkillTab label="Jest" />
              <SkillTab label="Vercel" />
              <SkillTab label="Linux" />
              <SkillTab label="Postman" />
              
            </div>
            <h3 className="text-l my-4 text-gray-400">Others</h3>
          </div>
        </div>
      </section></>
  )
}
// Skill tab component
function SkillTab({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 text-gray-100 rounded-full border border-gray-100 font-semibold text-base shadow hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-200 cursor-default">
      {label}
    </span>
  )
}

export default page