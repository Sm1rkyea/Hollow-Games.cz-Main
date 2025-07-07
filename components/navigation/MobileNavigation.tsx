import React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './navbar/Theme'
import NavLinks from './navbar/NavLinks'

const MobileNavigation = () => {
  return (
    <Sheet>
        <SheetTrigger className='link-socials h-[2.3rem] w-[2.3rem] rounded-md transition-all cursor-pointer flex justify-center items-center md:hidden'>
            <Image src='/icons/hamburger.svg' alt='Hamburger' width={22} height={22} className='inverted-colors' />
        </SheetTrigger>
        <SheetContent side='right' className='bg-dark300_light200 min-w-screen'>
            <SheetHeader>
            <SheetTitle className='flex justify-between px-3'>
                <Link href='/'><Image src='/images/logo.png' alt='Hollow-Games.cz' height={160} width={160} /></Link>

                <div className='flex space-x-3'>
                    <ThemeSwitcher />

                    <SheetClose className='link-socials group h-[2.25rem] w-[2.25rem] rounded-md transition-all cursor-pointer flex justify-center items-center'>
                        <Image src='/icons/close.svg' alt='Close' width={22} height={22} className='inverted-colors-reversed opacity-60 group-hover:opacity-100 transition-all' />
                    </SheetClose>
                </div>
            </SheetTitle>
            <SheetDescription className='mt-6 space-y-2 px-3 w-full'>
                <NavLinks />
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation