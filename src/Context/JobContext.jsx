import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from './localStorage'
export const JobContext=createContext()
function JobProvider({children}) {
  const[jobs,setJobs]=useLocalStorage('jobs',[])
  const[filterjobs,setfilterjobs]=useLocalStorage('filterjobs',[])
    const[jobsapplied,setjobsapplied]=useLocalStorage("jobsapplied",[])
     const[postjob,setpostjob]=useLocalStorage('postjob',[])
 const[jobs1,setjobs1]=useLocalStorage('jobs1',[])
  const fetchdata=async()=>{
    try{
      const response=await fetch('https://api.joinrise.io/api/v1/jobs/public?page=&limit=100&sort=desc&sortedBy=createdAt&jobLoc=')
      const data=await response.json()
      console.log(data.result.jobs)
      setJobs(data.result.jobs)
      setfilterjobs(data.result.jobs)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <JobContext.Provider value={{jobs,setJobs,filterjobs,setfilterjobs,jobsapplied,setjobsapplied,postjob,setpostjob,jobs1,setjobs1}}>
    {children}
    </JobContext.Provider>
  )
}

export default JobProvider
