import React from 'react'

const About = () => {
  return (
    <div className='p-4 bg-green-500 min-h-screen flex flex-col justify-start items-center font-mono'>
        <h1 className='flex p-4 lg:text-9xl md:text-9xl sm:text-5xl text-5xl text-center text-white font-black mb-5 font-mono fontFamily: Monaco'>
          About the Team
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 sm:w-2/4 w-2/4 md:w-full md:grid-cols-4 gap-4 p-10 rounded-xl items-center bg-white text-black relative shadow-sm max-w-screen-lg'>
          <div className='p-4 rounded-xl hover:bg-green-100 transition duration-300 ease-in-out justify-center text-center font-bold font-mono'>
            <div className='py-10'>IMAGE 1 WILL GO HERE</div>
            CREATOR 1 NAME
            <p className='font-light'>DESCRIPTION</p>
          </div>
          <div className='p-4 rounded-xl hover:bg-green-100 transition duration-300 ease-in-out justify-center text-center font-bold'>
            <div className='py-10'>IMAGE 2 WILL GO HERE</div>
            CREATOR 2 NAME
            <p className='font-light'>DESCRIPTION</p>
          </div>
          <div className='p-4 rounded-xl hover:bg-green-100 transition duration-300 ease-in-out justify-center text-center font-bold'>
            <div className='py-10'>IMAGE 3 WILL GO HERE</div>
            CREATOR 3 NAME
            <p className='font-light'>DESCRIPTION</p>
          </div>
          <div className='p-4 rounded-xl hover:bg-green-100 transition duration-300 ease-in-out justify-center text-center font-bold'>
            <div className='py-10'>IMAGE 4 WILL GO HERE</div>
            CREATOR 4 NAME
            <p className='font-light'>DESCRIPTION</p>
          </div>
        </div>
    </div>
  )
}

export default About