import React, { useContext, useEffect,useState } from 'react'
import './Comps.css'
import { JobContext } from '../Context/JobContext'
function SearchBar() {
    const{setJobs,filterjobs}=useContext(JobContext)
     const[val,setval]=useState('')
    function searching(){
       
        const arr=filterjobs.filter((ele)=>
 ele.title.toLowerCase().includes(val.toLowerCase()) || ele.owner.companyName.toLowerCase().includes(val.toLowerCase())
)
setJobs(arr)
    }
    useEffect(()=>{
        searching()
    },[val])
  return (
    <div className='srch'>
      <input type='text' placeholder='Search Job role or company name ...' onChange={(e)=>setval(e.target.value)} value={val}/>
    </div>
  )
}

export default SearchBar
