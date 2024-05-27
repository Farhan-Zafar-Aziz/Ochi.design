import React from 'react'
import profile from '../assets/profile.jpg'

function About() {
  return (
    <div className='w-full p-20 -mt-10 bg-[#CDEA68] rounded-tl-4xl rounded-tr-4xl text-black px-20'>
     <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
     Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
     </h1>
     <div className='flex gap-5 w-full border-t-[1px] border-[#a4b175] mt-20'>
     <div className='w-1/2 mt-5'>
       <h1 className='text-7xl '>Our Approach</h1>
       <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 transform transition duration-300 hover:scale-125 cursor-pointer'>Read more 
       <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
       </button>
     </div>
     <div className='w-1/2 h-[70vh] rounded-2xl bg-[#acc254] mt-8'>
     <img className='w-full h-full rounded-2xl transition-all duration-300 hover:scale-110' src={profile} alt="" />

     </div>
    </div>
    </div>
  )
}

export default About