import React, { useState } from 'react'
import "./Login.css"
import logo from '../../assets/assets/logo.png'
const Login = () => {

  const [pagestate,setpagestate]=useState("Sign Up");
  return (
    <div className='box'>
      <img src={logo} className='login-logo' alt="" />
      <div className="content">
      <div className='login-form'>
        <form className='form'>
        <div className='signin'>
        <h1>
         {pagestate}
        </h1>
        </div>
        {
          pagestate==="Sign Up"?<input className='log-input' type="text" placeholder='Your name' />:<p></p>
        }
          
          
        
          <input className='log-input' type="email" placeholder='Email' />
       
          
          
          <input className='log-input' type="password" placeholder='Password' />
     
  
          <button className='signin-btn'>Sign In</button>
      

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p className='nh'>Need help?</p>
          </div>
        

          {
            pagestate==="Sign In"
            ?
              <div className='state-change'>
            <p>Create an Account</p>
            <p className='state-changer' onClick={()=>{
              setpagestate("Sign Up")
            }}>Sign Up</p>
            </div>
            :
              <div className='state-change'>
              <p>Already have an Account?</p>
            <p className='state-changer' onClick={()=>{
              setpagestate("Sign In")
            }}>Sign In</p>
            </div>
          
          }
           
           
         
         
      
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login