import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { XCircleIcon } from '@heroicons/react/outline';

// import background from "../assets/bg_login.jpg";
import logo from '../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='absolute w-full min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-10'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src={logo} alt='Workflow' />
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-black bg-opacity-50 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <h2 className='text-center text-3xl font-extrabold text-white'>
              Sign in
            </h2>
            {error ? (
              <div className='rounded-md bg-red-50 p-4 mt-4'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <XCircleIcon
                      className='h-5 w-5 text-red-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3'>
                    <h3 className='text-sm font-medium text-red-800'>
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                className='p-3 my-2 bg-zinc-700 rounded text-white placeholder:text-zinc-500'
                type='email'
                placeholder='Email'
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='p-3 my-2 bg-zinc-700 rounded text-white placeholder:text-zinc-500'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold text-white'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-400'>New to Netflix?</span>{' '}
                <Link
                  to='/register'
                  className='text-white font-bold hover:underline'
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div className="relative min-h-screen bg-black">
    //   <div className="absolute w-full min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-10">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //       <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
    //     </div>

    //     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //       <div className="bg-black bg-opacity-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //         <h2 className="text-center text-3xl font-extrabold text-white">
    //           Sign in
    //         </h2>
    //         {error ? (
    //           <div className="rounded-md bg-red-50 p-4 mt-4">
    //             <div className="flex">
    //               <div className="flex-shrink-0">
    //                 <XCircleIcon
    //                   className="h-5 w-5 text-red-400"
    //                   aria-hidden="true"
    //                 />
    //               </div>
    //               <div className="ml-3">
    //                 <h3 className="text-sm font-medium text-red-800">
    //                   {error}
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         ) : null}
    //         <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
    //           <input
    //             className="p-3 my-2 bg-zinc-700 rounded text-white placeholder:text-zinc-500"
    //             type="email"
    //             placeholder="Email"
    //             autoComplete="email"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <input
    //             className="p-3 my-2 bg-zinc-700 rounded text-white placeholder:text-zinc-500"
    //             type="password"
    //             placeholder="Password"
    //             autoComplete="current-password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <button className="bg-red-600 py-3 my-6 rounded font-bold text-white">
    //             Sign In
    //           </button>
    //           <div className="flex justify-between items-center text-sm text-gray-400">
    //             <p>
    //               <input className="mr-2" type="checkbox" />
    //               Remember me
    //             </p>
    //             <p>Need Help?</p>
    //           </div>
    //           <p className="py-8">
    //             <span className="text-gray-400">New to Netflix?</span>{" "}
    //             <Link
    //               to="/register"
    //               className="text-white font-bold hover:underline"
    //             >
    //               Sign Up
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute h-full w-full">
    //     <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
    //     <img
    //       src={background}
    //       className="h-full w-full object-cover"
    //       alt="background"
    //     />
    //   </div>
    // </div>
  );
};

export default Login;
