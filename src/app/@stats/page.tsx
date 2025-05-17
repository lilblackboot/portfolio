import React from 'react'

function Stats() {
  return (
    <div className='min-h-screen pb-5 h-fit '>
        <h1 className='p-15 bg-gradient-to-b text-center w-full text-8xl'>Stats</h1>
      <div className=' mx-7 flex gap-18   items-center justify-center flex-wrap'>
         <img  
       className='mx-auto mt-10'
       src="https://leetcard.jacoblin.cool/lilblackboot?theme=light&font=montserrat&extension=heatmap" alt="LeetCode Stats" />
       <img
       className='mx-auto mt-10'
       src="https://github-readme-stats.vercel.app/api?username=lilblackboot&show_icons=true&theme=light" />
      </div>

    </div>
  )
}

export default Stats