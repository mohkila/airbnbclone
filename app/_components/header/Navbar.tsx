import { GlobeAltIcon } from '@heroicons/react/16/solid'
import { MenuIcon, UserCircleIcon } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='flex space-x-2 justify-end items-center'> 
        <h3 className='hidden md:inline cursor-pointer hover:text-[#E15154] '> Become A host</h3>
        <GlobeAltIcon className='h-6 w-6 cursor-pointer hover:text-[#E15154]'/>
        <div className='flex space-x-2 border-[#E15154] border-2 rounded-full p-2 ' >
            <MenuIcon className='h-6 w-6 cursor-pointer hover:text-[#E15154]'/>
            <UserCircleIcon className='h-6 w-6 cursor-pointer hover:text-[#E15154]'/>
        </div>
    </div>
  )
}

export default Navbar