import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <Navbar/>

    <div className='flex items-center justify-center'>
      <div>
        <form onSubmit={()=>{}}>
          <h4 className='text-2xl mb-7'>Login</h4>
          <input type="text" placeholder='Email' className='input-box' />
          <button type='submit' className='btn-primary'>Login</button>
          <p className='text-sm text-center mt-4'>Not Registered yet? {""} <Link to="/register" className=''>Create an Account</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}
