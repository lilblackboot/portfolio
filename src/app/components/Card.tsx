import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import * as m from "motion/react-client"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})
function Card() {
  return (
    <>
    <m.div
     whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    className={montserrat.className + '  bg-white rounded-xl shadow-lg flex-1/4 flex-col  p-2 items-start '}>
      <Image src="/GoGuide.png" alt="Project Image" width={500} height={300} className="rounded-lg shadow-lg"/>
      <div className='px-2 w-full'><h3 className='text-2xl flex justify-between font-bold mt-4  '>GoGuide <Arrow/>  </h3>
      <p>Smart Campus Navigator</p></div>
    </m.div>
    </>
  )
}

function Arrow(){
  return(
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
  )
}

export default Card