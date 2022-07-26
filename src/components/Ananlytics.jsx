import React from 'react'
import Laptop from '../assets/laptop.png'

const Ananlytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
              <p className='uppercase text-coolBlue font-bold'> your Personalized Editor</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your Interface easily</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolorem ad eaque dolor! Iure consequatur numquam laboriosam nemo alias aliquam neque. 
                Commodi error harum sed facere ipsum eum quas eveniet cumque!
              </p>
              <button className='bg-black  w-[200px] rounded-md font-bold mx-auto md:mx-0 my-6 py-3 text-coolBlue'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Ananlytics