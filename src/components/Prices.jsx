import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Prices = () => {
  return (
    <div className='w-full py-[10rem] bg-white px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='font-bold text-2xl text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$49.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>128 GB Cloud Storage</p>
                    <p className='py-2 border-b mx-8'>One Device only</p>
                </div>
                <button className='bg-coolBlue  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col bg-gray-100 p-4 my-8 md:m-0 rounded-2xl hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='font-bold text-2xl text-center py-8'>Multi-Device</h2>
                <p className='text-center text-4xl font-bold'>$79.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>512 GB Cloud Storage</p>
                    <p className='py-2 border-b mx-8'>4-Device-syncing</p>
                </div>
                <button className='bg-black font-bold text-coolBlue  w-[200px] rounded-md my-6 mx-auto py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='font-bold text-2xl text-center py-8'>Business</h2>
                <p className='text-center text-4xl font-bold'>$399.99</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>16 TB Cloud Storage</p>
                    <p className='py-2 border-b mx-8'>Unlimited-Device-syncing</p>
                </div>
                <button className='bg-coolBlue  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Prices