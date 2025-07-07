'use client'

import React, { FormEvent, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { partnerList, partnerRequirementList } from '@/constants/partners'
import Image from 'next/image'
import Link from 'next/link'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const page = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [emailStatus, setEmailStatus] = useState(null);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const partnershipRequestData = {
      nickname: e.target.nickname.value,
      email: e.target.email.value,
      channel: e.target.channel.value,
      type: e.target.type.value,
      aboutme: e.target.aboutme.value,
    };

    const JSONdata = JSON.stringify(partnershipRequestData);
    const endpoint = "/api/send";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    setEmailStatus(response.status);

    if (response.status === 200) {
      setEmailSubmitted(true);

      e.target.reset();

      toast.success('Žádost byla úspěšně odeslána.')
    } else {
      toast.error('Něco se pokazilo.')

      e.target.reset();
    }
  };

  return (
    <div>
        <section className="bg-center bg-cover bg-no-repeat bg-light dark:bg-dark">
            <div className="h-[70vh] justify-center pt-8 flex flex-col bg-gradient-to-t from-[-140%] dark:from-[-40%] from-light-200 dark:from-dark-300">
                <h1 className="text-center font-iceland font-bold text-[4rem] sm:text-[6rem] uppercase">Spolupráce</h1>
            </div>
        </section>

        <section className="text-center pt-12 pb-12 bg-dark300_light200">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">UZAVŘENÉ SPOLUPRÁCE</h1>
                <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
            </div>

            <div className='w-[70%] max-sm:w-[85%] pt-10 gap-x-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto'>
                {partnerList.map((item, index) => (
                    <div key={index}>
                        <span className={cn(item.rank === 'YouTuber' ? 'badge-youtuber' : item.rank === 'TikToker' ? 'badge-tiktoker' : item.rank === 'Streamer' ? 'badge-streamer' : item.rank === 'Partner' ? 'badge-partner' : 'badge-default', 'uppercase font-bold py-1.5 px-5 border-b-3 translate-y-5 inline-block')}>{item.rank}</span>

                        <div className='flex justify-between max-sm:justify-center max-sm:flex-col px-4 py-4 pt-8 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 rounded-[10px]'>
                            <Image src={`https://visage.surgeplay.com/bust/64/${item.nickname}.png`} unoptimized alt={item.nickname} width={75} height={75} className='max-sm:mx-auto' />

                            <div className='text-center space-y-2 my-auto'>
                                <h1 className='font-bold'>{item.nickname}</h1>

                                <ul className='flex space-x-3 pr-2 max-sm:justify-center'>
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
        </section>

        <section className="text-center pt-14 pb-8 bg-dark400_light300">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">JAK NAVÁZAT SPOLUPRÁCI</h1>
                <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
            </div>

            <div className='w-[70%] max-sm:w-[85%]  pt-12 flex flex-col mx-auto'>
                <Accordion type="single" collapsible className='flex-1 bg-white/80 shadow-md dark:shadow-none dark:bg-dark-500 rounded-[10px]'>
                    {partnerRequirementList.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx + 1}`}>
                            <AccordionTrigger className="cursor-pointer p-5 px-6 text-[16px]">
                                {item.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-left bg-slate-200/40 dark:bg-dark-300/40 p-4 px-6 rounded-b-[10px]">
                                <ul className="list-disc pl-4 space-y-6">
                                    {item.requirements.map((requirement, i) => (
                                    <li key={i}>{requirement.line}</li>
                                    ))}
                                </ul>

                                <AlertDialog>
                                    <AlertDialogTrigger className={item.hasButton ? 'w-full py-3 text-center rounded-[8px] bg-yellow-500 dark:bg-aqua-300 mt-5 font-medium cursor-pointer hover:bg-yellow-600 dark:hover:bg-aqua-700 transition-all' : 'hidden'}>Mám zájem</AlertDialogTrigger>
                                    <AlertDialogContent className='mt-4 bg-dark300_light200'>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Žádost o {item.label}a</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                <form onSubmit={handleSubmit} className='mt-2 space-y-4'>
                                                    <div className='flex flex-col space-y-1'>
                                                        <label className='text-slate-900 dark:text-slate-100 max-md:text-left'>Váš herní nickname:</label>
                                                        <input type="text" id='nickname' name="nickname" required placeholder="Zde zadejte Váš herní nickname." className='bg-white/90 dark:bg-dark-100/50 py-3 px-4 rounded-[6px]' />
                                                    </div>

                                                    <div className='flex flex-col space-y-1'>
                                                        <label className='text-slate-900 dark:text-slate-100 max-md:text-left'>Váš kontaktní email:</label>
                                                        <input type="email" id='email' name="email" required placeholder="Zde zadejte Váš kontaktní email." className='bg-white/90 dark:bg-dark-100/50 py-3 px-4 rounded-[6px]' />
                                                    </div>

                                                    <div className='flex flex-col space-y-1'>
                                                        <label className='text-slate-900 dark:text-slate-100 max-md:text-left'>Odkaz na kanál:</label>
                                                        <input type="text" id='channel' name="channel" required placeholder="Zde zadejte odkaz na Váš kanál nebo profil." className='bg-white/90 dark:bg-dark-100/50 py-3 px-4 rounded-[6px]' />
                                                    </div>

                                                    <div className='flex flex-col space-y-1'>
                                                        <label className='text-slate-900 dark:text-slate-100 max-md:text-left'>Kategorie:</label>
                                                        <input type="text" id='type' name="type" disabled value={item.label} required placeholder="Zde zadejte odkaz na Váš kanál nebo profil." className='bg-white/90 dark:bg-dark-100/50 py-3 px-4 rounded-[6px]' />
                                                    </div>

                                                    <div className='flex flex-col space-y-1'>
                                                        <label htmlFor='aboutme' className='text-slate-900 dark:text-slate-100 max-md:text-left'>Proč já:</label>
                                                        <textarea id='aboutme' name="aboutme" required placeholder={`Proč byste měl/a být ${item.label === 'Partner' ? 'partnerem' : 'tvůrcem'} právě a Vy?`} className='min-h-[5vh] max-h-[20vh] resize-y bg-white/90 dark:bg-dark-100/50 py-3 px-4 rounded-[6px]' />
                                                    </div>

                                                    <div className='items-end justify-end flex space-x-2.5'>
                                                        <AlertDialogCancel className='cursor-pointer !border-none !py-2 !px-4 bg-white hover:bg-slate-50 text-slate-900 !shadow-sm dark:shadow-none dark:bg-slate-950 dark:hover:bg-slate-950/60 dark:text-slate-200 transition-all rounded-md'>Zrušit</AlertDialogCancel>
                                                        <button type="submit" className='cursor-pointer py-2 px-4 bg-white hover:bg-slate-50 text-slate-900 shadow-sm dark:shadow-none dark:bg-slate-950 dark:hover:bg-slate-950/60 dark:text-slate-200 transition-all rounded-md'>Odeslat</button>
                                                    </div>
                                                </form>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                    </AlertDialogContent>
                                </AlertDialog>
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