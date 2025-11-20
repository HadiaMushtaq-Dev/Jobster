import React, { useState } from 'react'
import "./Comps.css"
import { useContext } from 'react'
import { JobContext}  from '../Context/JobContext'
function FilterBar() {
  const[range,setrange]=useState()
  const[val1,setval1]=useState('')
  const[val2,setval2]=useState('')
  const[val3,setval3]=useState('')
  const[val4,setval4]=useState('')
  const[val5,setval5]=useState('')
  const{filterjobs,setJobs}=useContext(JobContext)
  
 function filtering() {
  const arr = filterjobs.filter((j) => {
    const seniority = !val3 || j.seniority === val3;
    const salary = !range || j.descriptionBreakdown?.salaryRangeMaxYearly >= range;
    const type = !val4 || j.type === val4;
    const address = !val1 || j.locationAddress?.toLowerCase().includes( val1.toLowerCase());
    const dept = !val2 || j.department?.toLowerCase().includes(val2.toLowerCase());
    const work = !val5 || j.descriptionBreakdown?.workModel === val5;

    return seniority && salary && type && address && dept && work;
  });

  console.log(arr);
  setJobs(arr);
}
function filtering1(){
    setval1('')
    setval2('')
    setval3('')
    setval4('')
    setval5('')
    setrange(0)
    setJobs(filterjobs)
}
  
  return (
    <div className='filt'>
      <select id="expertise" onChange={(e)=>setval3(e.target.value)} value={val3}>
        <option value=''>Select Expertise Level</option>
        <option value='Entry Level'>Entry Level</option>
        <option value='Mid-Level'>Mid Level</option>
        <option value='Senior Level'>Senior Level</option>
        <option value='Internship'>Internship</option>
      </select>
       <select id="employment" onChange={(e)=>setval4(e.target.value)} value={val4}>
        <option value=''>Select Employment Type</option>
        <option value='Full-Time'>Full Time</option>
        <option value='Part-Time'>Part Time</option>
        <option value='Contract'>Contract</option>
        <option value='Freelance'>Freelance</option>
      </select>
       <select id="remote" onChange={(e)=>setval5(e.target.value)} value={val5}>
        <option value=''>Select Type</option>
        <option value='Remote'>Remote</option>
        <option value='Onsite'>Onsite</option>
        <option value='Hybrid'>Hybrid</option>
      </select>
      <input type="text" placeholder='Enter Preferred Location' onChange={(e)=>setval1(e.target.value)} value={val1} />
      <input type="text" placeholder='Enter Department'  onChange={(e)=>setval2(e.target.value)} value={val2}/>
      <input type="text" placeholder='Enter Salary'  onChange={(e)=>setrange(Number(e.target.value))} value={range}/>
      
      
      <button onClick={filtering}>Filter</button>
      <button onClick={filtering1}>Clear</button>
    </div>
  )
}

export default FilterBar
