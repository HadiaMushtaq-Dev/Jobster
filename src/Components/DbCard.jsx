import React from 'react'
import Cookies from "js-cookie";
function DbCard(props) {
      const name=Cookies.get("name")
  return (
    
       <div className='dash1'>
        <h1>Welcome! {name}</h1>
        <div className='info'>
          <h3>Upload Your Resume:</h3>
          <input type='file'/>
        </div>
        <h3>Your Jobs Applied:</h3>
        <div className='grid1'>
        {props.jobs.length>0?
        props.jobs.map((j)=>(
          <div className='item1'>
          <h2>{j.title}</h2>
          <p>🔷 {j.company}</p>
          <p>🔶 {j.department}</p>
          <p className='status'>Status : Pending</p>
          </div>
        )):<p>No Jobs to show ...</p>}
      </div>
      </div>
    
  )
}

export default DbCard
