import { navbarButtons } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NavButtons = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <>
        {navbarButtons.map((item) => {
            const buttonComponent = (
                <Link key={item.label} className={cn(isFooter ? 'link-socials bg-white/80 hover:bg-white/60 dark:bg-dark-50/70 dark:hover:bg-slate-400/20  !rounded-full h-[2.75rem] w-[2.75rem]' : 'link-socials h-[2.3rem] w-[2.3rem]', "rounded-md transition-all cursor-pointer flex justify-center items-center")} href={item.route} target='_blank'>
                    <Image src={item.imgSrc} alt={item.label} width={20} height={20} className='inverted-colors-reversed' />
                </Link>
            );

            return buttonComponent;
        })}
    </>
  )
}

export default NavButtons