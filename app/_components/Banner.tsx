import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]  '>
        <Image src={'/house.jpg'} alt='banner' fill className='object-cover object-left opacity-40 h-[70vh]' />
        <div className='absolute top-1/2 w-full text-center  '>
         <h1 className='font-extrabold  text-4xl '>Where To Go !!</h1>
         <button type='button' className=' 
         px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl 
         active:scale-90 transition duration-300
         bg-gradient-to-r from-pink-500 to-violet-500 text-white
         hover:bg-gradient-to-l  
         '>Iam Here</button>

         </div>
    </div>
  )
}

export default Banner