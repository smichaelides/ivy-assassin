import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './pages/home';
import Rules from './pages/rules';
import About from './pages/about';
import Login from './pages/login';
import Eliminations from './pages/eliminations';
import Admin from './pages/admin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [netid, setNetID] = useState('');
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isLoggedIn && netid) {
      fetch(`http://localhost:3001/isAdmin?username=${netid}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.message);
          console.log("Admin status:", data.message);
        })
        .catch((error) => {
          console.error("Error fetching admin status:", error);
        });
    }
  }, [isLoggedIn, netid]);

  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
      console.log('Resized');
    }
  };
  window.addEventListener('resize', hideMenu);

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar toggle={toggle} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} />
          <Dropdown isOpen={isOpen} toggle={toggle} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} />
          <Routes>
            <Route path='/home' element={<Home netid={netid} />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/eliminations' element={<Eliminations />} />
            <Route path='/about' element={<About />} />
            {isAdmin && <Route path='/admin' element={<Admin />} />}
            <Route path='/' element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} setNetID={setNetID} />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
