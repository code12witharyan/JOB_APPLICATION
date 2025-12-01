// import React from 'react'
// import { Route } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJobs from './pages/ApplyJobs.jsx'
import Application from './pages/Application.jsx'
import Recruiter from './components/Recruiter.jsx'
import { useContext } from 'react'
import { AppContext } from './context/AppContext.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddJob from './pages/AddJob.jsx'
import ManageJobs from './pages/ManageJobs.jsx'
import ViewApplications from './pages/ViewApplications.jsx'
import 'quill/dist/quill.snow.css'
//


function App() {
  const { showRecruiterLogin } = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <Recruiter />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJobs />} />
        <Route path='/application' element={<Application />} />
          <Route path='/dashboard' element={<Dashboard />}>
           <Route path='add-job' element={<AddJob />} />
           <Route path='manage-job' element={<ManageJobs />} />
           <Route path='view-application' element={<ViewApplications />} />
          </Route>

      </Routes>
    </div>
  )
}

export default App
