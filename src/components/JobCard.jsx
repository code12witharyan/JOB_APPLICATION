import React from 'react'
import { assets } from '../assets/assets'

const JobCard=({job}) =>{
  return (
    <div className='border border-gray-200 p-6 shadow rounded  '>
      <div className='flex justify-between items-center '>
        <img className='h-8'src ={assets.company_icon} alt =""/>
      </div>
      <h4 className ='font-medium text-xl mt-2'>{job.title}</h4>
      <div className ='flex items-center text-xs gap-3 mt-4'>
        <span className ='bg-blue-50 border border-blue-200 px-4 py-1 rounded'>{job.location}</span>
        <span className ='bg-red-50 border border-red-200 px-4 py-1 rounded'>{job.level}</span>
      </div>
      <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='flex justify-between text-sm items-center mt-6'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded '>Apply Now</button>
        <button className='border-gray-500 border text-gray-500 px-4 py-2 rounded '>Learn More</button>
      </div>
      
    </div>
  )
}

export default JobCard
