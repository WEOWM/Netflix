import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../../Commponent/NavBar/NavBar'

const Singup = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <div className="singin-page">
          <img className='w-100' style={{ height: '48rem' }} src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/c6e22290-98e5-4eee-b72d-47156e4893fc/IN-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
          <div className="backdrop w-100">


          </div>
          <div className='sing-page'>
            <form className='inp-form container p-4'>
              <h2 className='sing-logo'>Sign up</h2>
              <input className='form-control al' type='email' placeholder='Email' />
              <input className='form-control al' type='Password' placeholder='Password' />
              <input className='form-control al' type='Password' placeholder='Confirm password' />
              <NavLink to={'/singup'} className='btn signbtn  al'> sign up</NavLink>
              
             
            </form>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Singup