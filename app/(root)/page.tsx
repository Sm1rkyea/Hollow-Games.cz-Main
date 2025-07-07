'use client'

import ChangelogCard from "@/components/cards/ChangelogCard";
import MinigameCard from "@/components/cards/MinigameCard";
import StatsCard from "@/components/cards/StatsCard";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <section className="bg-center bg-cover bg-no-repeat bg-light dark:bg-dark">
        <div className="min-h-screen justify-center flex flex-col bg-gradient-to-t from-[-140%] dark:from-[-40%] from-light-200 dark:from-dark-300">
          <div className="2xl:justify-between pt-12 sm:pt-16 2xl:pt-10 max-2xl:space-y-10 text-center 2xl:items-center 2xl:flex 2xl:px-[30vh]">
            <div className="2xl:text-left 2xl:max-w-[35vw] max-w-[75%] mx-auto">
              <h1 className="text-[2rem] 2xl:text-[3.5rem] font-bold text-yellow-500/60 dark:text-white">U nás Vaše <span className=" text-yellow-300 dark:text-aqua-300">cesta</span> teprve začíná.</h1>
              <p className="text-[20px] 2xl:text-[25px] font-light text-yellow-500/50 dark:text-white/80">Vybavte se, vybojujte si vyšší hodnost a vstupte do dungeonů s {theme === 'light' ? 'božskými' : 'temnými'} a nemilosrdnými bossy.</p>
            </div>

            <div>
              <div className="relative mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"> 
                <Image src={theme === 'light' ? '/images/entity-light.png' : '/images/entity-dark.png'} alt="Entity" fill sizes="(min-width: 1024px) 500px, 400px" className="animate-image-scale object-contain" />
              </div>
            </div>
          </div>

          <div className="max-2xl:hidden space-y-2 translate-y-[10rem]">
            <p className="text-center text-yellow-950 dark:text-white">Sjeďte níže</p>
            <Image src='/icons/arrow.svg' alt='Arrow' width={30} height={30} className='inverted-colors mx-auto animate-move-up-down' />
          </div>
        </div>
      </section>

      <section className="text-center pt-12 pb-12 bg-dark300_light200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[2rem] uppercase text-black dark:text-white">Proč právě my?</h1>
          <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
        </div>

        <div className="mt-10">
          <div className="col-span-4 flex justify-center">
            <StatsCard />
          </div>
        </div>
      </section>

      <section className="text-center pt-14 pb-8 bg-dark400_light300">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[2rem] uppercase text-black dark:text-white">Seznam změn</h1>
          <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
        </div>

        <div className="mt-10">
          <div className="col-span-3 flex justify-center">
            <ChangelogCard />
          </div>
        </div>
      </section>

      <section className="text-center pt-14 pb-8 bg-dark300_light200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[2rem] uppercase text-black dark:text-white">Naše minihry</h1>
          <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
        </div>

        <div className="mt-10">
          <div className="col-span-3 flex justify-center">
            <MinigameCard />
          </div>
        </div>
      </section>
    </div>
  );
}