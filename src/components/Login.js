import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleFormData = (e) => {
    e.preventDefault();
    const message = validateData(name?.current?.value, email?.current?.value, password?.current?.value);
    console.log(message)
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Now

      createUserWithEmailAndPassword(auth,  email?.current?.value, password?.current?.value)
       .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;     
         console.log(name);
         console.log(user);
     
         updateProfile(user, {
          displayName: name?.current?.value, photoURL: USER_AVATAR
         }).then(() => {
           console.log(auth)
           const { uid, photoURL, email, displayName } = auth.currentUser;
           dispatch(addUser({ "uid": uid, "photoURL": photoURL, "email": email, "displayName": displayName }));

        }).catch((error) => {
          setErrorMessage(error.message, "+", error.code);
        });
       })
       .catch((error) => {
        const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode, "-" ,errorMessage);
         console.log(errorCode, errorMessage)
    });
    }
    else {
      // SignIN form
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login Page")
        console.log(user);
        const { uid, photoURL, email, displayName } = auth.currentUser;
        dispatch(addUser({"uid": uid, "photoURL": photoURL, "email": email, "displayName" : displayName} ))

        })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       setErrorMessage(errorCode, "+", errorMessage);
    });
  }
}

  return (
      <div>
      <Header />
      <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix-background' />
      </div>
         
      <form onSubmit={handleFormData} className='p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h2 className='font-semibold py-6 text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
        {
          !isSignInForm && (
            <input ref={name} type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg' />
          )
        }
        <input ref={email} type='email' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg'/>  
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700 opacity-80 text-white text-xl rounded-lg' />  
        <p className='py-2 text-red-500 text-xl font-bold'>{errorMessage}</p>
        <button type='submit' className='bg-red-700 p-2 py-3 my-6 w-full rounded-lg font-bold'>{isSignInForm? 'Sign In': 'Sign Up'}</button>
        <p className='py-2 font-semibold cursor-pointer' onClick={handleToggleSignInForm}>{isSignInForm? 'New to Netflix ? Sign Up Now': 'Already Registered ? Sign In Now'} </p>
      </form>
   
    </div>
      
  )
}

export default Login