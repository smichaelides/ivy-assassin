import React from 'react'
import { Link } from 'react-router-dom'
import IvyLogo from '../images/ivy-logo.jpg'

const Navbar = ({ toggle, isLoggedIn, setIsLoggedIn, isAdmin }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono fontFamily: Monaco' role='navigation'>
        <Link to='/ivy-website' className='flex items-center'>
            <div>
                <img src={IvyLogo} className ='flex pl-4 h-10 size-15'></img>
            </div>
            <div className='pl-2'>IVY ASSASSIN</div>
        </Link>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <div className='pr-5 md:block hidden'>
            <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/home'>Home</Link>
            <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/rules'>Rules</Link>
            <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/eliminations'>Eliminations</Link>
            <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/about'>About</Link>
            {isAdmin && (
                <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/admin'>ADMIN</Link>
            )}
            {isLoggedIn && (
                <Link className='p-4 rounded-full hover:bg-green-300 transition duration-300 ease-in-out' to='/' onClick={handleLogout}>Log Out</Link>
            )}
        </div>
    </nav>
  )
}

export default Navbar
