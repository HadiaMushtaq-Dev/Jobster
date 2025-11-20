import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(props) {
  const Navigate=useNavigate()
  return (
    <div className='home'>
        {props.mode==='employee'?
       <div className='home1'>
        <h1>A Place To Find Your Dream Job</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. CuDonem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. c quam felis m sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <button onClick={()=>Navigate('/ViewJobs')}>Get Started</button>
        </div>:<div className='home1'>
        <h1>Find The Best Candidate For Your Company</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. CuDonem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. c quam felis m sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <button onClick={()=>Navigate('/PostJobs')}>Get Started</button>
        </div>
      }
    </div>
  )
}

export default Home
