import React from 'react';

const Register = () => {
  return (
    
    <div className="flex justify-center items-center h-screen m-4">
      <div className="w-full lg:w-1/2">
        <div className='bg-slate-300 px-10 py-16 rounded-3xl'>
          <h1 className='text-center text-6xl'>Welcome</h1>
        
          <div className=''>
            <input className='mt-4 border border-2 border-gray-500 rounded-sm p-3 w-full bg-transparent' type='email' placeholder='Email'/>
          </div>
          <div className=''>
            <input className='mt-4 border border-2 border-gray-500 rounded-sm p-3 w-full bg-transparent' type='password' placeholder='Password'/>
          </div>
          <div className=''>
            <input className='mt-4 border border-2 border-gray-500 rounded-sm p-3 w-full bg-transparent' type='password' placeholder='Confirm Password'/>
          </div>
          <div className=''>
            <button className='mt-4 w-full p-3 duration-75 hover:scale-[1.01] hover:bg-blue-400 bg-blue-300 rounded-md'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Register;
