import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { discordRuleList, minecraftRuleList } from '@/constants/rules'

const page = () => {
  return (  
    <div>
        <section className="bg-center bg-cover bg-no-repeat bg-light dark:bg-dark">
            <div className="h-[70vh] justify-center pt-8 flex flex-col bg-gradient-to-t from-[-140%] dark:from-[-40%] from-light-200 dark:from-dark-300">
                <h1 className="text-center font-iceland font-bold text-[4rem] sm:text-[6rem] uppercase">Pravidla</h1>
            </div>
        </section>

        <section className="text-center pt-12 pb-12 bg-dark300_light200">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">MINECRAFT PRAVIDLA</h1>
                <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
            </div>

            <div className='w-[70%] max-sm:w-[85%]  pt-12 flex flex-col mx-auto'>
                <Accordion type="single" collapsible className='flex-1 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 rounded-[10px]'>
                    {minecraftRuleList.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx + 1}`}>
                            <AccordionTrigger className="cursor-pointer p-5 px-6 text-[16px]">
                            {item.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-left bg-slate-200/40 dark:bg-dark-300/40 p-4 px-6 rounded-b-[10px]">
                            <ul className="list-disc pl-4 space-y-6">
                                {item.rules.map((rule, i) => (
                                  <li key={i}>{rule.line}</li>
                                ))}
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        <section className="text-center pt-14 pb-8 bg-dark400_light300">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">DISCORD PRAVIDLA</h1>
                <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
            </div>

            <div className='w-[70%] max-sm:w-[85%]  pt-12 flex flex-col mx-auto'>
                <Accordion type="single" collapsible className='flex-1 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 rounded-[10px]'>
                    {discordRuleList.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx + 1}`}>
                            <AccordionTrigger className="cursor-pointer p-5 px-6 text-[16px]">
                            {item.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-left bg-slate-200/40 dark:bg-dark-300/40 p-4 px-6 rounded-b-[10px]">
                            <ul className="list-disc pl-4 space-y-6">
                                {item.rules.map((rule, i) => (
                                  <li key={i}>{rule.line}</li>
                                ))}
                            </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default page