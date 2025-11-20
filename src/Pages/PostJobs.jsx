import React, { useContext } from 'react'
import "./Page.css"

import { useState } from 'react'
import { JobContext } from '../Context/JobContext'
function PostJobs() {
 const{setpostjob}=useContext(JobContext)
  const[val1,setval1]=useState('')
    const[val2,setval2]=useState('')
    const[val3,setval3]=useState('')
    const[val4,setval4]=useState('')
    const[val5,setval5]=useState('')
    const[val6,setval6]=useState('')
    const[val7,setval7]=useState('')
    const[val8,setval8]=useState('')
    const[val9,setval9]=useState('')
    function handleClick(e){
      e.preventDefault()
      setpostjob((prev)=>[...prev,{id:Date.now(),title:val1,company:val2,expertise:val3,employment:val4,remote:val5,location:val6,department:val7,salary:val8,skills:val9}])
      alert("Job Posted Successfully")
    }
  return (
    <div className='post'>
      <form onSubmit={handleClick}>
        <h1>Enter Job Requirements</h1>
      <input type="text" placeholder='Enter Job Title'   onChange={(e)=>setval1(e.target.value)} value={val1} requried/>
      <input type="text" placeholder='Enter Company name '  onChange={(e)=>setval2(e.target.value)} value={val2}  requried/>
         <select id="expertise" onChange={(e)=>setval3(e.target.value)} value={val3} >
        <option value=''>Select Expertise Level</option>
        <option value='Entry Level'>Entry Level</option>
        <option value='Mid-Level'>Mid Level</option>
        <option value='Senior Level'>Senior Level</option>
        <option value='Internship'>Internship</option>
      </select>
       <select id="employment" onChange={(e)=>setval4(e.target.value)} value={val4} >
        <option value=''>Select Employment Type</option>
        <option value='Full-Time'>Full Time</option>
        <option value='Part-Time'>Part Time</option>
        <option value='Contract'>Contract</option>
        <option value='Freelance'>Freelance</option>
      </select>
       <select id="remote" onChange={(e)=>setval5(e.target.value)} value={val5} >
        <option value=''>Select Type</option>
        <option value='Remote'>Remote</option>
        <option value='Onsite'>Onsite</option>
        <option value='Hybrid'>Hybrid</option>
      </select>
      <input type="text" placeholder='Enter Preferred Location'  onChange={(e)=>setval6(e.target.value)} value={val6} />
      <input type="text" placeholder='Enter Department'  onChange={(e)=>setval7(e.target.value)} value={val7} required/>
      <input type="text" placeholder='Enter Salary' onChange={(e)=>setval8(e.target.value)} value={val8}/>
      
      <textarea placeholder='Enter skills Requirements' onChange={(e)=>setval9(e.target.value)} value={val9}>

      </textarea>
      <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default PostJobs
