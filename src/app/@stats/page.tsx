import React from 'react'

function Stats() {



  return (
    <div className='min-h-screen bg-white  pb-5 h-fit '>
        <h1 className='p-15 bg-gradient-to-b text-center w-full text-8xl'>Stats & Certies</h1>
      <div className=' mx-7 flex gap-18 w-1/2  items-center justify-center flex-wrap'>
         <a href="https://leetcode.com/lilblackboot" target="_blank" rel="noopener noreferrer">
          <img  
       className='mx-auto mt-10'
      src="https://leetcard.jacoblin.cool/lilblackboot?theme=light&font=montserrat&extension=heatmap" alt="LeetCode Stats" />
         </a>
      <a href='https://www.github.com/lilblackboot' target="_blank" rel="noopener noreferrer">
         <img
       className='mx-auto mt-10'
       src="https://github-readme-stats.vercel.app/api?username=lilblackboot&show_icons=true&theme=light" />
      </a>
      </div>
      

    </div>
  )
}

export default Stats