//    import React from 'react'
import { jobsData } from '../assets/assets'; 
import { createContext , useEffect, useState } from 'react';
 export const AppContext = createContext();

    export const AppContextProvider =(props )=>{
       
            const [searchFilter, setSearchFilter] = useState(
                { title :'',
                  location :'' 
                }
            ) 

            const [isSearched, setIsSearched] = useState(false)

            const [jobs, setJobs] = useState([])

        const value ={
            setSearchFilter, searchFilter
            , isSearched, setIsSearched,
            jobs, setJobs
        }

        // function to fetch job data
        const fetchJobs= async()=>{
             setJobs(jobsData)
        }

        useEffect(()=>{
            fetchJobs()
        },[])

        return (
            <AppContext.Provider  value={value}>
                {props.children}
            </AppContext.Provider>)
    }