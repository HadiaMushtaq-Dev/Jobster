import React from 'react'
import DbCard1 from '../Components/DBcard1'
import { useContext } from 'react'
import { JobContext } from '../Context/JobContext'
import "./Page.css"
function EmployerDashboard() {
  const{postjob,setpostjob}=useContext(JobContext)
  return (
    <div className='dash'>
      <DbCard1 jobs={postjob} setjobs={setpostjob}/>
    </div>
  )
}

export default EmployerDashboard
