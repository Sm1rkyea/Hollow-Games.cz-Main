import { minigamesList } from '@/constants/minigames'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'

const MinigameCard = () => {
  return (
    <div className='w-[70%] max-sm:w-[85%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {minigamesList.map((item, index) => {
            return (
                <div key={index} className='rounded-[10px] hover:shadow-lg shadow-md dark:shadow-none overflow-hidden bg-white/80 dark:bg-dark-500 transition-all'>
                    <div className="relative h-[180px] w-full">
                        <Image
                            src={item.imgSrc}
                            alt="Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-4 text-left">
                        <Badge variant="secondary" className={item.category === 'Nové' ? 'bg-slate-300 dark:bg-slate-800/40' : item.category === 'Populární' ? 'bg-lime-600/40 dark:bg-lime-600/10' : item.category === 'Údržba' ? 'bg-red-600/30 dark:bg-red-400/10' : item.category === null || "" ? 'hidden' : 'bg-slate-200 dark:bg-slate-800/30'} asChild>
                            <span>{item.category}</span>
                        </Badge>

                        <div className='pt-1 pl-[1px]'>
                            <h2 className="text-xl font-semibold">{item.label}</h2>

                            <p className='text-gray-500 text-md pt-1.5'>{item.description}</p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default MinigameCard