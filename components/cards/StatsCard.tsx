import { infoList, statsList } from '@/constants/stats'
import Image from 'next/image'
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function StatsCard() {
  return (
    <div className="max-w-[70%] flex gap-35 max-xl:flex-col max-xl:gap-3 max-2xl:max-w-[80%] max-md:max-w-[60%] mx-auto">
      <Carousel className="flex-1 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 p-6 rounded-[10px]">
        <CarouselContent>
          {infoList.map((item) => (
            <CarouselItem key={item.label} className="flex flex-col items-center gap-2">
              <div className="bg-light-200/70 dark:bg-dark-300/60 w-full py-4 rounded-[8px] shadow-sm hover:shadow-lg transition-all">
                <Image
                  src={item.imgUrl}
                  alt={item.label}
                  width={35}
                  height={35}
                  className="object-contain inverted-colors m-auto"
                />
              </div>

              <h1 className="text-md mt-4 font-medium text-light-600/70">{item.label}</h1>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="!bg-light-600/[0.025] !rounded-[12px] cursor-pointer hover:!bg-light-600/[0.1] transition-all" />
        <CarouselNext className="!bg-light-600/[0.025] !rounded-[12px] cursor-pointer hover:!bg-light-600/[0.1] transition-all" />
      </Carousel>

      <Carousel className="flex-1 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 p-6 rounded-[10px]">
        <CarouselContent>
          {statsList.map((item) => (
            <CarouselItem key={item.label} className="flex flex-col items-center gap-2">
              <div className="bg-light-200/70 dark:bg-dark-300/60 w-full py-4 rounded-[8px] shadow-sm hover:shadow-lg transition-all">
                <Image
                  src={item.imgUrl}
                  alt={item.label}
                  width={35}
                  height={35}
                  className="object-contain inverted-colors m-auto"
                />
              </div>

              <h1 className="text-md mt-4 font-medium text-light-600/70">{item.label}</h1>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="!bg-light-600/[0.025] !rounded-[12px] cursor-pointer hover:!bg-light-600/[0.1] transition-all" />
        <CarouselNext className="!bg-light-600/[0.025] !rounded-[12px] cursor-pointer hover:!bg-light-600/[0.1] transition-all" />
      </Carousel>
    </div>
  )
}
