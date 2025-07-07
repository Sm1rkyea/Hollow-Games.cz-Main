import React from 'react'
import NavButtons from './navbar/NavButtons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-dark450_light350 flex justify-center py-5">
      <div className='flex flex-col space-y-2 items-center'>
        <div className='flex space-x-2.5'>
          <NavButtons isFooter={true} />
        </div>

        <div className='border-t-2 border-t-slate-400/40 dark:border-t-slate-400/20 pt-2 text-center'>
          <h1 className='max-sm:text-[12px]'>&copy; 2025 Hollow-Games.cz | Všechna práva vyhrazena</h1>
          <p className='text-gray-500 text-[13px] max-sm:text-[10px]'>Created by <Link href='https://instagram.com/sm1rkyea' target='_blank' className='hover:text-yellow-500 dark:hover:text-aqua-300 transition-all'>Smirkyea</Link> in <Link href='https://nextjs.org/' target='_blank' className='hover:text-yellow-500 dark:hover:text-aqua-300 transition-all'>Next.js</Link> & <Link href='https://tailwindcss.com/' target='_blank' className='hover:text-yellow-500 dark:hover:text-aqua-300 transition-all'>TailwindCSS</Link> with &hearts;</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer