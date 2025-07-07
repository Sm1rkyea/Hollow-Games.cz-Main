'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
        {sidebarLinks.map((item) => {
            const isActive = item.isDropdown ? item.dropdownContent?.some(({route}) => pathname === route || pathname.startsWith(`${route}/`)) : pathname === item.route || (pathname.startsWith(item.route) && item.route.length > 1);

            const linkComponent = (
                <Link key={item.label} className={cn(isActive ? 'sm:link-active max-sm:bg-yellow-400 dark:max-sm:bg-aqua-300' : 'underline-hover max-sm:hover:bg-black/[0.05] max-sm:dark:hover:bg-white/10 max-sm:transition-all', 'flex cursor-pointer justify-start pg-medium space-x-1 items-center max-sm:py-3 max-sm:px-4 max-sm:font-medium max-sm:rounded-[8px]')} href={item.route}>
                    <p>{item.label}</p>
                </Link>
            );

            const dropdownComponent = (
                <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className={cn(isActive ? 'sm:link-active max-sm:bg-aqua-300' : 'underline-hover max-sm:hover:bg-black/[0.05] max-sm:dark:hover:bg-white/10 max-sm:transition-all', 'flex group cursor-pointer justify-start pg-medium space-x-1 items-center max-sm:py-3 max-sm:px-4 max-sm:font-medium max-sm:rounded-[8px] max-sm:w-full')}>
                        <p>{item.label}</p>

                        <Image src='/icons/arrow.svg' alt='Arrow' width={16} height={16} className='inverted-colors transition-all duration-200 group-hover:-translate-y-[2px]' />
                    </DropdownMenuTrigger>
                        
                    <DropdownMenuContent align='center' className='bg-white  dark:bg-dark-100 dark:border-dark-50 text-black/80 dark:text-light-200'>
                        {item.dropdownContent?.map((dropdownItem) => (
                            <Link href={dropdownItem.route} key={dropdownItem.label}>
                                <DropdownMenuItem className='flex space-x-1 cursor-pointer transition-all hover:bg-black/[0.025] dark:hover:!bg-dark-50' key={dropdownItem.label}>
                                    {dropdownItem.label}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            );

            return item.isDropdown ? dropdownComponent : linkComponent;
        })}
    </>
  )
};

export default NavLinks