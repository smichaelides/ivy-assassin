import React, { useState, useEffect } from 'react';

const Eliminations = () => {
    const [eliminations, setEliminations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/eliminationsHistory')
            .then((res) => res.json())
            .then((data) => {
                console.log("Received eliminations:", data.message);
                setEliminations(data.message || []);
            })
            .catch((error) => {
                console.error("Error fetching eliminations:", error);
                setEliminations([]);
            });
    }, []);

    return (
        <div className='bg-white h-full flex flex-col font-mono text-center'>
            <div className='flex-shrink-0 w-full'>
                <h1 className='lg:text-9xl md:text-9xl sm:text-5xl text-5xl font-black my-5'>
                    Eliminations:
                </h1>
                <hr className='h-1 w-3/4 mx-auto bg-green-500 border-0 mb-5' />
                <div className='w-full flex flex-col items-center'>
                    {eliminations.length === 0 ? (
                        <div className='my-5 py-5 w-3/4 shadow bg-white rounded-xl text-center'>
                            <p className='px-5'>No eliminations yet...</p>
                        </div>
                    ) : (
                        eliminations.map((elimination, index) => (
                            <div key={index} className='my-3 py-3 w-3/4 shadow bg-white rounded-xl text-center hover:bg-gray-50 transition duration-200'>
                                <p className='px-5 text-lg'>
                                    <span className='font-bold text-green-600'>{elimination.assassin}</span>
                                    {' eliminated '}
                                    <span className='font-bold text-red-600'>{elimination.target}</span>
                                </p>
                                <p className='text-sm text-gray-500'>
                                    {new Date(elimination.timestamp).toLocaleString()}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Eliminations;
