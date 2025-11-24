// import React from 'react'
// import { Route } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJobs from './pages/ApplyJobs.jsx'
import Application from './pages/Application.jsx'

function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/apply-job/:id' element={<ApplyJobs/>}/>
     <Route path='/application' element={<Application/>}/> 
    </Routes>
    </div>
  )
}

export default App
