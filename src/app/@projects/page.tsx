import React from 'react'
import Card from '@/app/components/Card'
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
    <div className=' min-h-screen pb-10 h-fit bg-gray-200 px-15 flex flex-col items-center justify-start gap-15 '>
        <h1 className=' p-15 bg-gradient-to-b flex justify-center items-center text-center   w-full text-8xl'>Projects 
         <Link href="./projects"> <CircleArrowRight className='font-bold mt-3 ml-6 w-10 h-10 '/></Link>
           </h1>
        <div className='mt-10 mx-auto flex gap-5 h-content items-center justify-center flex-wrap'>
        <Card/>
        <Card/>
        <Card/> 
        </div>

    </div>
    </>
  )
}

export default Projects