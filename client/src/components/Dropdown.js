import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle, isLoggedIn, setIsLoggedIn, isAdmin }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div
      className={`${
        isOpen ? 'grid' : 'hidden'
      } grid-rows-4 text-center items-center bg-green-500 font-mono transition-all duration-300 ease-in-out rounded-lg shadow-lg p-4`}
      onClick={toggle}
    >
      <Link
        className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
        to='/home'
      >
        Home
      </Link>
      <Link
        className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
        to='/rules'
      >
        Rules
      </Link>
      <Link
        className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
        to='/eliminations'
      >
        Eliminations
      </Link>
      <Link
        className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
        to='/about'
      >
        About
      </Link>
      {isAdmin && (<Link
          className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
          to='/admin'
        >
          ADMIN
        </Link>
      )}
      {isLoggedIn && ( <Link
          className='p-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out'
          to='/' onClick={handleLogout}
        >
          Log Out
        </Link>
      )}
    </div>
  );
};

export default Dropdown;
