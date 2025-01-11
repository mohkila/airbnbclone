import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchbar from './Searchbar'
import Navbar from './Navbar'

function Header({placeholder}:{placeholder?:string}) {
  return (
    <div className='  sticky top-0   z-50 shadow-md bg-black  shadow-[#E15154] py-5'>
      <div className='container  grid grid-cols-3  items-center'>
        <Link href={'/'} className='  flex items-center   '>
        <Image src={'/airbnb.png'} alt='logo' height={50} width={50} className='object-contain object-left' />
        <h1 className='font-extrabold text-3xl text-[#E15154]'>airbnb</h1>
        </Link>
        <Searchbar placeholder={placeholder}/>
       <Navbar/>
        </div>
    </div>
  )
}

export default Header