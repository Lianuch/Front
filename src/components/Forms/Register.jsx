import React from 'react';
import googleIcon from '../../assets/images/googleIcon.svg';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen mx-4">
      <div className="w-full lg:w-1/4 sm:w-1/2 h-[400px] bg-slate-100 p-4 rounded-md">
        <div className="flex flex-col mt-6 ">
          <h1 className='text-center mb-4 font-medium text-lg'> Not registered yet? Hurry up and join us now!</h1>
          <input
            type="email"
            id="Email"
            class="bg-gray-50 border mb-4 border-black active:border-blue-400 p-2  text-gray-900 text-sm rounded-md "
            placeholder="Email"
            required
          />
          <input
            type="email"
            id="Email"
            class="bg-gray-50 border border-black active:border-blue-400 p-2  text-gray-900 text-sm rounded-md "
            placeholder="password"
            required
          />
          <button className="bg-zinc-800 mt-8 rounded-md p-1 text-white text-lg">
            Create account
          </button>
          <p className="mt-2  text-center opacity-50">or</p>

          <button className="flex items-center justify-center mt-2 rounded-md border border-black p-1 text-lg">
           <img src={googleIcon} className="w-6 h-6 mr-2" /> Continue with Google
          </button>

         
          <a href="" className="text-center mt-4">
            <span className="opacity-60">Already have an account?</span>
            <span className="text-blue-500"> 
              <Link to="/login">Log in</Link>
              </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
