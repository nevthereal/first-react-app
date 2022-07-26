import React from 'react'
import Typed from 'react-typed';

const hero = () => {
  return (
    <div className='text-white px-4'>
        <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#047bbf] uppercase font-bold p-2'>Develope your Future</p>
            <h1 className=' font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Modern Web Developement Simplified</h1>
            <div className='flex justify-center items-center'>
                <p className='md:tex-5xl sm:text-4xl text-xl font-bold py-4'>Delivering the best Editor for</p>
                <Typed 
                    className='md:tex-5xl sm:text-4xl text-xl font-bold pl-2' 
                    strings={['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'SQL', 'C#']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Build the best Website now</p>
            <button className='bg-coolBlue  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default hero