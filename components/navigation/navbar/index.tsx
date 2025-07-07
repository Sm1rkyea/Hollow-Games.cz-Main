import React from 'react'
import Theme from './Theme'
import Link from 'next/link'
import Image from 'next/image'
import NavLinks from './NavLinks'
import NavButtons from './NavButtons'
import MobileNavigation from '../MobileNavigation'

const index = () => {
  return (
    <nav className='bg-dark300_light200 fixed w-screen z-50 justify-between flex px-2 sm:px-12 py-5 items-center shadow-md'>
      <Link href='/'>
        <Image src='/images/logo.png' alt='Hollow-Games.cz' height={180} width={180} />
      </Link>

      <div className='flex space-x-6 max-md:hidden'>
        <NavLinks />
      </div>
      

      <div className='flex space-x-3'>
        <div className='flex space-x-3 max-lg:hidden'>
          <NavButtons isFooter={false} />
        </div>

        <Theme />

        <MobileNavigation />
      </div>
    </nav>
  )
}

export default index