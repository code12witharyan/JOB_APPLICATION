import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets';
import Loading from '../components/Loading.jsx';
import NavBar from '../components/NavBar.jsx';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard.jsx';

function ApplyJobs() {

  const { id } = useParams();
  const [JobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return JobData ? (
    <>
      <NavBar />
      <div className='container min-h-screen mx-auto flex flex-col py-10 px-4 2xl:px-20'>

        <div className='bg-white text-black rounded-lg w-full'>

          {/* TOP SECTION */}
          <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-lg'>
            
            <div className='flex flex-col md:flex-row items-center'>
              <img
                className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border'
                src={JobData.companyId?.image}
                alt=""
              />

              <div className='text-center md:text-left text-neutral-700'>
                <h1 className='text-2xl sm:text-4xl font-medium'>
                  {JobData.title}
                </h1>

                <div className='flex flex-row flex-wrap gap-y-2 gap-6 mt-2 items-center max-md:justify-center text-gray-600'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="" />
                    {JobData.companyId?.name}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="" />
                    CTC : {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
              <button className='bg-blue-600 p-2.5 px-10 text-white rounded'>
                Apply Now
              </button>
              <p className='mt-1 text-gray-600'>
                Posted {moment(JobData.date).fromNow()}
              </p>
            </div>

          </div>

          {/* MAIN SECTION : LEFT + RIGHT */}
          <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>

            {/* LEFT SIDE — JOB DESCRIPTION */}
            <div className='w-full lg:w-2/3'>
              <h2 className='font-bold text-2xl mb-4'>Job Description</h2>

              <div>
                <div
                  className='rich-text'
                  dangerouslySetInnerHTML={{ __html: JobData.description }}
                ></div>

                <button className='bg-blue-600 p-2.5 px-10 text-white rounded mt-10'>
                  Apply Now
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — MORE JOBS */}
            <div className='w-full lg:w-1/3'>
              <h2 className='font-bold text-xl mb-4'>
                More jobs from {JobData.companyId?.name}
              </h2>

              <div className='flex flex-col gap-4'>
                {jobs
                  .filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id)
                  .slice(0, 4)
                  .map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))
                }
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  ) : (
    <Loading />
  );
}

export default ApplyJobs;
