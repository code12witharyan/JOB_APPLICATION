import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Hero = () => {

  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null)
  const locationRef = useRef(null)


  const onSearch = () => {

    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearched(true)
    // console.log({
    //   title: titleRef.current.value,
    //   location: locationRef.current.value
    // })
  }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className=' bg-linear-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-3xl font-bold mb-4'>
          Over 1 Million Jobs. Find Your Next Opportunity
        </h2>
        <p>
          Explore thousands of job listings from top companies and take the next step in your career today .  The perfect job is just a click away!
        </p>
        <div className='flex max-sm:flex-col bg-white rounded text-gray-600 max-w-xl sm:mx-auto justify-center gap-4 mt-8 px-4'>
          <div className='flex items-center '>
            <img className='h-4 sm:h-5 ' src={assets.search_icon} alt="search_icons" />
            <input type="text" placeholder="Job title, keywords, or company" className='max-sm:text-xs p-2 rounded outline-none w-full' ref={titleRef} />
          </div>
          <div className='flex items-center'>
            <img className='h-4 sm:h-5 ' src={assets.location_icon} alt="location_icons" />
            <input type="text" placeholder="Location" className='max-sm:text-xs p-2 rounded outline-none w-full' ref={locationRef} />
          </div>
          <button onClick={onSearch} className='bg-blue-600 text-white px-4 py-2 rounded  my-4 max-sm:mt-2'>Search Jobs</button>
        </div>
      </div>

      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex items-center gap-10 lg:gap-16 flex-wrap justify-center w-full'>
          <p>Trusted by </p>
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.microsoft_logo} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero
