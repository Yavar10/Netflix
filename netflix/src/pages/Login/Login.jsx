import React from 'react'
import "./Login.css"
import logo from '../../assets/assets/logo.png'
const Login = () => {
  return (
    <div className='box'>
      <img src={logo} className='login-logo' alt="" />
      <div className="content">
      <div className='login-form'>
        <form className='form'>
        <div className='signin'>
        <h1>
          Sign In
        </h1>
        </div>
        
        {/*   <input className='log-input' type="text" placeholder='Your name' /> */}
          
          
        
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
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login