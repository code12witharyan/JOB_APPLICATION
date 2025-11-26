import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import JobListing from '../components/JobListing.jsx'
import AppDownload from '../components/AppDownload.jsx'
import Footer from '../components/footer.jsx' 

function Home() {
  return (
    <div>
      <NavBar/>  
      <Hero/> 
      <JobListing/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
