import React from 'react'
import Card from '@/app/components/Card'

const Projects = () => {
  return (
    <>
    <div className=' h-screen bg-gray-200 px-15 flex flex-col items-center justify-start gap-15 '>
        <h1 className=' p-15 bg-gradient-to-b text-center   w-full text-6xl'>Projects</h1>
        <div className='mt-10 mx-7 flex gap-18 h-content items-center justify-center flex-wrap'>
        <Card/>
        <Card/>
        <Card/> 
        </div>

    </div>
    </>
  )
}

export default Projects