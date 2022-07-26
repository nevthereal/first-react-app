import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:tex-5xl sm:text-4xl text-xl font-bold py-2'>Want Tips & Tricks and optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                    <button className='bg-coolBlue text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>We care the protection of our data. Read our <span className='text-coolBlue font-semibold'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter