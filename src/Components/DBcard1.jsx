import React from 'react'
import Cookies from "js-cookie";
import "./Comps.css"
function DbCard1(props) {
      const name=Cookies.get("name")
      function deletejob(id){
          const arr=props.jobs.filter((j)=>j.id!==id)
          props.setjobs(arr)
      }
  return (
    
       <div className='dash1'>
        <h1>Welcome! {name}</h1>
        
        <h3>Your Jobs Posted:</h3>
        <div className='grid2'>
        {props.jobs.length>0?
        props.jobs.map((j)=>(
          <div className='item1' key={j.id}>
          <h2>{j.title}</h2>
          <p>💼 {j.company}</p>
          <div className='char'>
          <p> {j.department}</p>
          <p> {j.expertise}</p>
          <p>{j.location}</p>
          <p>{j.salary} $</p>
          <p>{j.remote}</p>
          <p>{j.employment}</p>
          </div>
          {j.skills.split(" ").map((j)=>(
            <p>♦ {j}</p>
          ))}
          <button onClick={()=>deletejob(j.id)}>Remove Job</button>
          </div>
        )):<p>No Jobs posted yet ...</p>}
      </div>
      </div>
    
  )
}

export default DbCard1
