import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero';
import EliminatedHero from '../components/EliminatedHero';

const Home = ({ netid }) => {
  const [isEliminated, setIsEliminated] = useState(false);

  useEffect(() => {
    if (netid) {
      fetch(`http://localhost:3001/isEliminated?username=${netid}`)
        .then((res) => res.json())
        .then((data) => {
          setIsEliminated(data.message);
          console.log("Elimination status:", data.message);  // Debug log
        })
        .catch((error) => {
          console.error("Error fetching elimination status:", error);
        });
    }
  }, [netid]);

  return (
    <>
      {isEliminated ? 
        <EliminatedHero netid={netid} /> : 
        <Hero netid={netid} />}
    </>
  );
};

export default Home;
