
import './App.css'
import NavBar from './Components/NavBar'
import EmployerDashboard from './Pages/EmployerDashboard'
import UserDashboard from './Pages/UserDashboard'
import Login from './Pages/Login'
import Home from './Pages/Home'
import PostJobs from './Pages/PostJobs'
import ViewJobs from './Pages/ViewJobs'
import {Routes,Route} from 'react-router-dom'
import {  useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const[mode,setMode]=useState('')
  const[logged,setLogged]=useState(false)

   
  return (
    
   
      <div>
        {!logged?
        <Login setMode={setMode} setLogged={setLogged}/>:<>
       <><NavBar mode={mode}/></>
        <Routes>
          <Route path='/' element={<Home mode={mode}/>}/>
          <Route path="*" element={<Navigate to="/" />} />

          {mode==='employee'?
          <>
          <Route path='/ViewJobs' element={<ViewJobs/>}/>
          <Route path='/UserDashboard' element={<UserDashboard/>}/>
          </>
          :<>
          <Route path='/PostJobs' element={<PostJobs/>}/>
          <Route path='/EmployerDashboard' element={<EmployerDashboard/>}/>
          </>}
         
         </Routes>
         </>
        }
      </div>
     
    
  )
}

export default App
