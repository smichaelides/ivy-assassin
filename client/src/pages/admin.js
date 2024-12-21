import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [remainingPlayers, setRemainingPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [numPlayersEliminated, setNumPlayersEliminated] = useState(0);

    useEffect(() => {
        getRemainingPlayers();
    }, []);

    const getRemainingPlayers = () => {
        fetch(`/remainingPlayers`)
            .then((res) => res.json())
            .then((remainingPlayers) => { setRemainingPlayers(remainingPlayers.message) })
            .catch((error) => {
                console.error("Error fetching data:", error)
            });
    }

    const eliminatePlayer = () => {
        fetch(`/eliminate?username=${selectedPlayer}&numPlayersEliminated=${numPlayersEliminated}`)
            .then((res) => res.json())
            .then((numPlayersEliminated) => {
                // Assume the server response contains the updated number of eliminated players
                setNumPlayersEliminated(numPlayersEliminated.message);
                getRemainingPlayers();
            })
            .catch((error) => {
                console.error("Error eliminating player:", error)
            });
    };

    return (
        <div className='bg-white h-full flex flex-col font-mono text-center items-center'>
            <div className='flex-shrink-0 w-full'>
                <h1 className='lg:text-9xl md:text-9xl sm:text-5xl text-5xl font-black my-5'>
                    ADMIN PAGE:
                </h1>
                <hr className='h-1 w-3/4 mx-auto bg-green-500 border-0 mb-5' />
                <h2 className='lg:text-6xl md:text-4xl sm:text-2xl text-1xl mb-2'>
                    Eliminate a Player
                </h2>
                <select 
                    className='bg-green-500 p-3 mb-5 rounded-full text-black text-lg'
                    value={selectedPlayer}
                    onChange={(e) => setSelectedPlayer(e.target.value)}
                >
                    <option disabled selected value="">Please select a player</option>
                    {remainingPlayers.map((e, index) => <option key={index} value={e}>{e}</option>)}
                </select>
                <div className='flex justify-center p-6'>
                    <button 
                        id='eliminate-btn' 
                        className='py-6 px-10 bg-green-500 rounded-full lg:text-4xl md:text-4xl text-3xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center'
                        onClick={eliminatePlayer} disabled={!selectedPlayer}
                    >
                        Eliminate {selectedPlayer}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
