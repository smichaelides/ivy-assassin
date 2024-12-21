import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn, setNetID }) {
  const [inputNetID, setInputNetID] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputNetID) {
      setNetID(inputNetID);
      setIsLoggedIn(true);
      navigate('/home');
    }
  };

  return (
    <div className='bg-green-500 h-screen flex justify-center items-center font-mono'>
      <div className='bg-white p-10 rounded-lg flex flex-col justify-center items-center text-center max-w-2xl w-full mx-4'>
        <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-black mb-5'>
          IVY ASSASSIN
        </h1>
        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-10'>
          Let the games begin...
        </h2>
        <form onSubmit={handleLogin} className='flex flex-col items-center w-full max-w-md'>
          <input
            type="text"
            placeholder="Enter your NetID"
            value={inputNetID}
            onChange={(e) => setInputNetID(e.target.value)}
            className='mb-8 p-3 border rounded w-full text-lg'
            required
          />
          <button 
            type="submit"
            className='py-4 px-8 bg-green-500 rounded-full text-2xl hover:bg-green-300 transition duration-300 ease-in-out animate-bounce text-white'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
