"use client"
import { useState } from 'react'
import { userInfo,  headerItems } from '@/constants/constant'
import { NavItems } from '../models/Header'
import { BiMenu } from 'react-icons/bi'
import Image from 'next/image'

const Header : React.FC = () => {
  const [navItem, showNavItems] = useState<boolean>(false)
  const pic = '/profile-image.jpeg'
  return (
    <>
    <header className='p-7 min-h-screen justify-between fixed top-0 w-full z-10 md:flex'>
        <div className='flex justify-between '>
        <div className='flex space-x-2'>
          <div className='h-auto w-auto rounded-full '> 
        <Image
                    src={pic}
                    alt="profile pic"
                    width={50}
                    height={50}
                    className='rounded-full '
                />
              </div>

            <h2 className='text-2xl font-bold '>{userInfo.name}</h2>
            </div>
            <BiMenu
            size={30}
            className='md:hidden'
            onClick={() => showNavItems(prevState => !prevState)}
            />
        </div>
        <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ navItem ? 'block' : 'hidden'}`}>
            {
              Object.keys(headerItems).map(item => (
                <a
                    key={headerItems[item as keyof NavItems].label} 
                    className='block md:inline-block cursor-pointer font-normal hover:font-bold hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:underline decoration-2'> 
                  {headerItems[item as keyof NavItems].label} </a>
              ))
}     
        </div>
    </header>
    </>
  )
}

export default Header