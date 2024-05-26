import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
      <div>
      <Header />
      <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix-background' />
      </div>
         
      <form className='p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h2 className='font-semibold py-6 text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
        {
          !isSignInForm && (
            <input type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg' />
          )
        }
        <input type='email' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg'/>  
        <input type='password' placeholder='Password'  className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg'/>  
        <button type='submit' className='bg-red-700 p-2 py-3 my-6 w-full rounded-lg font-bold'>{isSignInForm? 'Sign In': 'Sign Up'}</button>
        <p className='py-2 font-semibold cursor-pointer' onClick={handleToggleSignInForm}>{isSignInForm? 'New to Netflix ? Sign Up Now': 'Already Registered ? Sign In Now'} </p>
      </form>
   
    </div>
      
  )
}

export default Login