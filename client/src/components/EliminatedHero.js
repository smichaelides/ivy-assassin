import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminatedHero = () => {
    const [numKills, setNumKills] = useState(0);
    const [numRemaining, setNumRemaining] = useState(200);
    const [netid, setNetID] = useState('netid');
    const navigate = useNavigate();

    // Will run this useEffect() on page load
    useEffect(() => {
        fetch(`/numKills?username=${netid}`)
            .then((res) => res.json())
            .then((numKills) => {setNumKills(numKills.message)})
            .catch((error) => {
                console.error("Error fetching data:", error)
            });
        fetch(`/numRemaining`)
            .then((res) => res.json())
            .then((numRemaining) => {setNumRemaining(numRemaining.message)})
            .catch((error) => {
                console.error("Error fetching data:", error)
            });
    }, []);

    const viewEliminations = () => {
        navigate('/eliminations')
    };

    return (
        <div className='bg-white h-screen flex min-h-screen
        flex-col justify-center items-center font-mono text-center'>
            <h1 className='py-0 lg:text-9xl md:text-9xl sm:text-5xl text-5xl font-black mb-5'>
                IVY ASSASSIN
            </h1>
            <h2 className='lg:text-6xl md:text-4xl sm:text-2xl text-1xl mb-2 text-red-500'>
                You have been ELIMINATED.
            </h2>
            <div className='py-10'></div>
            <button className='py-6 px-10 bg-red-500 rounded-full lg:text-4xl md:text-4xl text-3xl hover:bg-red-300 transition duration-300 ease-in-out flex items-center animate-bounce'
            onClick={viewEliminations}>
                See all eliminations here!
            </button>
            <div className='py-5'></div>
            <div className='grid grid-cols-1 sm:grid-cols-1 sm:w-2/4 w-2/4 md:w-full md:grid-cols-2 gap-4 p-10 rounded-xl  items-center text-center bg-red-500 text-black relative shadow-sm max-w-screen-lg items-center'>
                <div className='p-5 bg-white rounded-l justify-center'>
                    <p>Number of Kills:</p>
                    <p className='font-bold'>{numKills}</p>
                </div>
                <div className='p-5 bg-white rounded-l justify-center'>
                    <p>Number of People Remaining:</p>
                    <p className='font-bold'>{numRemaining}</p>
                </div>
            </div>
        </div>
    )
}

export default EliminatedHero;