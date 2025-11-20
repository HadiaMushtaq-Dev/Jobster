import React, { useContext } from 'react'
import { JobContext } from '../Context/JobContext'

import './Page.css'
import DbCard from '../Components/DbCard'

function UserDashboard() {
  const{jobsapplied}=useContext(JobContext)

  return (
    <div className='dash'>
     <DbCard jobs={jobsapplied}/>
    </div>
  )
}

export default UserDashboard
