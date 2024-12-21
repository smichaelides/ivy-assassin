import React from 'react';

const Eliminations = () => {
  return (
    <div className='bg-white h-full flex flex-col font-mono text-center'>
      <div className='flex-shrink-0 w-full'>
            <h1 className='lg:text-9xl md:text-9xl sm:text-5xl text-5xl font-black my-5'>
            Eliminations:
            </h1>
            <hr className='h-1 w-3/4 mx-auto bg-green-500 border-0 mb-5' />
            <div className='w-full flex flex-col items-center'>
                <div className='my-5 py-5 w-3/4 shadow bg-white rounded-xl text-left'>
                <p className='px-5'>ALL ELIMINATIONS WILL BE LISTED HERE</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Eliminations;
