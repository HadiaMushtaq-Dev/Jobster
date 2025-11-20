import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Comps.css'
function NavBar(props) {
  const location=useLocation()
  const[active,setactive]=useState(location.pathname)
  useEffect(()=>{
    setactive(location.pathname)
  },[location.pathname])
  return (
    <div className='nav'>
        <div className='nav1'>

            <div className='logo'>
                <p>Jobster</p>
            </div>
              {props.mode==="employee"?
            <nav>
            <Link to='/' className={active==='/'?'link':'link1'}>Home</Link>
            <Link to='/ViewJobs' className={active==='/ViewJobs'?'link':'link1'}>View Jobs</Link>
            <Link to='/UserDashboard' className={active==='/UserDashboard'?'link':'link1'}>Dashboard</Link>
            </nav>:  <nav>
                        <Link to='/' className={active==='/'?'link':'link1'}>Home</Link>
                        <Link to='/PostJobs' className={active==='/PostJobs'?'link':'link1'}>Post Jobs</Link>
                        <Link to='/EmployerDashboard'className={active==='/EmployerDashboard'?'link':'link1'}>Dashboard</Link>
                        </nav>
              }
        </div>
      
    </div>
  )
}

export default NavBar
