import React, { useState } from 'react'
import Cookies from "js-cookie";

import "./Page.css"
import Nav1 from '../Components/Nav1'
function Login(props) {
  const[mode1,setMode1]=useState('')
  const[name,setname]=useState('')
  function handleClick(e){
    e.preventDefault()
    props.setMode(mode1)
    props.setLogged(true)
    Cookies.set("name",name)
  }
  return (
    <div className='main'>
      <Nav1/>
      <div  className='main1'>
       
      <form onSubmit={handleClick}>
        <h3>Enter your name</h3>
      <input type='text' placeholder='Username' required onChange={(e)=>setname(e.target.value)} value={name}/>
        <h3>Enter your password</h3>
      <input type='password' placeholder='Password' required/>
       
      <label htmlFor='entry' className='radio'>
        <input type='radio' name='entry' id='employer' onClick={()=>setMode1('employer')} required/> Employer
        <input type='radio' name='entry' id='user' onClick={()=>setMode1('employee')} required/>  Employee
      </label>
      <button type='submit'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
