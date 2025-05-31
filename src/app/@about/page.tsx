import React from 'react'
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function page() {
  return (
    <>
      <section id='aboutme' className="w-full min-h-screen h-content flex items-center justify-center bg-black relative">
        <div className="cntnr flex flex-col md:flex-row justify-center text-white w-full h-[80%] gap-12">
          {/* Main Content */}
          <div className="rg w-full md:w-2/3 py-30">
            <h1 className="text-6xl">building, beautifully</h1>
            <p className="mt-10 text-lg font-Montserrat">
              Hi, I am Suzan Mansuri, a web developer and designer. I am about solving real world problems in the most asthetically pleasing way.
            </p>
            <p className="mt-5 text-lg font-Montserrat">
              I have built, learned and designed so many things. Keep scrolling to take a look (or download my resume if you are a boring type)
            </p>
            <a href="/Resume.pdf" download>
              <button className="bg-yellow-500 px-10 py-5 text-black mt-10 text-4xl rounded-lg shadow-lg hover:bg-yellow-400 transition">
                Resume
              </button>
            </a>
          </div>
          {/* Timeline */}
          <div className="hidden md:flex flex-col items-center w-1/3">
            <div className="relative h-full flex flex-col items-start">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-gray-400 to-gray-700 rounded-full opacity-60"></div>
              {/* Timeline items */}
              <TimelineItem
                date="May 2025 - Present"
                title="Impact Training Program"
                subtitle="Parul University"
                description="Currently enrolled in the Impact Training Program, focusing on advanced web development and real-world problem solving."
                active
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Aug 2022"
                title="Started Bachelors"
                subtitle="Parul University"
                description="Began my undergraduate studies in Computer Science, learning core concepts and building foundational skills."
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Apr 2022"
                title="Completed 12th Grade"
                subtitle="Oxford English School"
                description="Graduated from high school with a focus on science and mathematics."
                fontClass={montserrat.className}
              />
            </div>
          </div>
        </div>
        <div className="btmbar h-[30px] text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      <section id='skills' className="w-full gap-30 min-h-screen h-content flex-col flex items-center justify-center bg-black relative">
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
              <SkillTab label="GSAP" />
              <SkillTab label="Jest" />
              <SkillTab label="Vercel" />
              <SkillTab label="Linux" />
              <SkillTab label="Postman" />
              
            </div>
            <h3 className="text-l my-4 text-gray-400">Others</h3>
          </div>
        </div>
      </section>
    </>
  )
}

// Timeline item component
function TimelineItem({
  date,
  title,
  subtitle,
  description,
  active = false,
  fontClass = "",
}: {
  date: string,
  title: string,
  subtitle: string,
  description: string,
  active?: boolean,
  fontClass?: string,
}) {
  return (
    <div className={`flex items-center mb-12 last:mb-0 ${fontClass}`}>
      {/* Dot */}
      <div className={`w-5 h-5 rounded-full border-4 ${active ? 'border-yellow-400 bg-yellow-400' : 'border-gray-400 bg-gray-800'} z-10 ml-2`}></div>
      {/* Text */}
      <div className="ml-6 text-left">
        <div className={`text-sm ${active ? 'text-yellow-300 font-semibold' : 'text-gray-300'}`}>{date}</div>
        <div className={`text-lg ${active ? 'text-yellow-100 font-bold' : 'text-white font-semibold'}`}>{title}</div>
        <div className="text-xs text-gray-400">{subtitle}</div>
        <div className="text-xs text-gray-300 mt-1">{description}</div>
      </div>
    </div>
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
