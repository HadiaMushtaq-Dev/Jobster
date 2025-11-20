import React, { useContext, useEffect, useState } from 'react'
import { JobContext } from '../Context/JobContext'
import './Page.css'
import { useLocalStorage } from '../Context/localStorage'
import SearchBar from '../Components/SearchBar'
import FilterBar from '../Components/FilterBar'
function ViewJobs() {
  const{jobs,setjobsapplied,setjobs1,jobs1}=useContext(JobContext)
  const[page,setpage]=useState(1)
  
  const pagination=()=>{
  

     const jobsPerPage = 10;
   const start = (page - 1) * jobsPerPage;
   const end = start + jobsPerPage;
   
   const currentJobs = jobs.slice(start, end);
   setjobs1(currentJobs)
   
  }
  useEffect(()=>{
    pagination()
  },[page,jobs])
  function apply(title,company,department){
    alert("Successfully Applied")
    setjobsapplied((prev)=>[...prev,{title:title,company:company,department:department}])
  }
  return (
    <div className='jobs'>
        <SearchBar/>
      <div className='jobs1'>
        <FilterBar/>
      
     {jobs1.length>0?
     <div className='grid'>
     {jobs1.map((j)=>(
      <div key={j.id} className='items'>
        <h3>{j.title}</h3>
          <p>{j.owner.companyName}</p>
        <div className='details1'>
        
          {j.type?
         <p className='p3'>{j.type}</p>:<></>
          }
         {j.seniority?
        <p className='p2'>{j.seniority}</p>:<></>
         }
        </div>
        <p> 💼 {j.department}</p>
         {j.locationAddress?
        <p> 🔷 {j.locationAddress}</p>:<></>
      }
        {j.descriptionBreakdown?
        <p>🔶 Salary Range : {j.descriptionBreakdown.salaryRangeMinYearly} $ - {j.descriptionBreakdown.salaryRangeMaxYearly} $ </p>:
        <p>🔶 Salary Range : Negotiable</p>}
        <p className='skills'>Skills Requried :</p>
      {j.skills_suggest?j.skills_suggest.map((element, index) => (
  <p key={index}>♦ {element}</p>
)):<p>No skills Specified</p>}


        <div className='details'>
          <button onClick={()=>apply(j.title,j.owner.companyName,j.department)}>Apply Now</button>
        
        </div>
        </div>
     ))}
     <div className='btn'>

     <button onClick={()=>setpage(prev=>prev>1?prev-1:prev)}>Prev</button>
     <button onClick={()=>setpage(prev=>prev<10?prev+1:prev)}>Next</button>
     </div>
     </div>
     
     :
     <div className='callback'>
      <p>Oops! Something went wrong ...</p></div>
      }
      </div>
    </div>
  )
}

export default ViewJobs
