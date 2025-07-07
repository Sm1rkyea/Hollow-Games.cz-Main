import { teamMembers } from '@/constants/team'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-center bg-cover bg-no-repeat bg-light dark:bg-dark">
            <div className="h-[70vh] justify-center pt-8 flex flex-col bg-gradient-to-t from-[-140%] dark:from-[-40%] from-light-200 dark:from-dark-300">
                <h1 className="text-center font-iceland font-bold text-[4rem] sm:text-[6rem] uppercase">Admin tým</h1>
            </div>
        </section>

        <section className="text-center pt-12 pb-12 bg-dark300_light200">
            {teamMembers.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">{item.title}</h1>
                        <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
                    </div>

                    <div className='w-[65%] max-xl:w-[85%] pb-16 pt-5 gap-x-6 grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 mx-auto'>
                        {item.members.map((item, index) => (
                            <div key={index}>
                                <span
                                    className={cn(
                                        (item.rank === 'Majitel' ||
                                        item.rank === 'Vedení' ||
                                        item.rank === 'PR Manager' ||
                                        item.rank === 'Quality Manager' ||
                                        item.rank === 'Hlavní Developer' ||
                                        item.rank === 'Hlavní Helper' ||
                                        item.rank === 'Hlavní Builder' ||
                                        item.rank === 'Hlavní Designer' ||
                                        item.rank === 'Hlavní Eventer')
                                        ? 'badge-majitel'
                                        : item.rank === 'Developer'
                                        ? 'badge-developer'
                                        : item.rank === 'Zkušební Developer'
                                        ? 'badge-developer-trial'
                                        : item.rank === 'Elitní Helper'
                                        ? 'badge-helper-elite'
                                        : (item.rank === 'Superior Helper' || item.rank === 'Helper')
                                        ? 'badge-helper'
                                        : item.rank === 'Zkušební Helper'
                                        ? 'badge-helper-trial'
                                        : item.rank === 'Elitní Builder'
                                        ? 'badge-builder-elite'
                                        : item.rank === 'Builder'
                                        ? 'badge-builder'
                                        : item.rank === 'Zkušební Builder'
                                        ? 'badge-builder-trial'
                                        : (item.rank === 'Designer' || item.rank === 'Eventer')
                                        ? 'badge-content'
                                        : (item.rank === 'Zkušební Designer' || item.rank === 'Zkušební Eventer')
                                        ? 'badge-content-trial'
                                        : 'badge-default',
                                        'uppercase font-bold py-1.5 px-5 border-b-3 translate-y-5 inline-block'
                                    )}
                                    >
                                    {item.rank}
                                </span>
                            
                                <div className='bg-white/80 dark:bg-dark-500 rounded-[10px]'>
                                    <div className='px-5 pb-3 pt-7'>
                                        <Image src={`https://visage.surgeplay.com/bust/130/${item.nickname}.png`} unoptimized alt={item.nickname} width={125} height={125} className='mx-auto' />

                                        <h1 className='text-[18px] font-medium pt-1'>{item.nickname}</h1>
                                    </div>

                                    <div className='dark:bg-dark-600 py-3 rounded-b-[10px]'>
                                        <ul className='flex space-x-3 pr-2 justify-center'>
                                            {item.socials.map((socialsItem, index) => (
                                                <div key={index}>
                                                    {socialsItem.tiktok != null || socialsItem.instagram != null || socialsItem.twitch != null || socialsItem.youtube != null ? (
                                                        <Link href={socialsItem.tiktok ?? socialsItem.instagram ?? socialsItem.twitch ?? socialsItem.youtube ?? '#'}>
                                                            <li className='link-socials w-[32px] h-[32px] rounded-[8px] flex items-center justify-center transition-all'>
                                                                <Image src={socialsItem.srcUrl} alt='Icon' width={18} height={18} className='inverted-colors-reversed' />
                                                            </li>
                                                        </Link>
                                                    ) : (
                                                        <span>
                                                            <li className='link-socials opacity-40 hover:bg-white dark:hover:bg-dark-100 w-[32px] h-[32px] rounded-[8px] flex items-center justify-center'>
                                                                <Image src={socialsItem.srcUrl} alt='Icon' width={18} height={18} className='inverted-colors-reversed' />
                                                            </li>
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    </div>
  )
}

export default page