import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-center bg-cover bg-no-repeat bg-light dark:bg-dark">
            <div className="h-[70vh] justify-center pt-8 flex flex-col bg-gradient-to-t from-[-140%] dark:from-[-40%] from-light-200 dark:from-dark-300">
                <h1 className="text-center font-iceland font-bold text-[4rem] sm:text-[6rem] uppercase">Kontakt</h1>
            </div>
        </section>

        <section className="text-center pt-12 pb-12 bg-dark300_light200">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[1.5rem] sm:text-[2rem] uppercase text-black dark:text-white">KONTAKTUJTE NÁS</h1>
                <hr className="w-[3.5rem] border-b-2 border-yellow-600 dark:border-aqua-300"/>
            </div>

            <div className='w-[70%] max-sm:w-[85%] pt-12 flex flex-col mx-auto space-y-3 dark:text-slate-100 text-black/80 text-left'>
                <div>
                    <h1 className='font-bold'>Kontaktní e-mailové adresy:</h1>
                    <ul className='list-disc pl-4.5'>
                        <li>Vedení serveru: <Link href='mailto:vedeni@hollow-games.cz' className='contact-link'>vedeni@hollow-games.cz</Link></li>
                        <li>Developer tým: <Link href='mailto:developers@hollow-games.cz' className='contact-link'>developers@hollow-games.cz</Link></li>
                        <li>Podpora (Helper tým): <Link href='mailto:support@hollow-games.cz' className='contact-link'>support@hollow-games.cz</Link></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold'>Podpora:</h1>
                    <ul className='list-disc pl-4.5'>
                        <li>HPanel (Ticket systém): <Link href='https://panel.hollow-games.cz' className='contact-link'>panel.hollow-games.cz</Link></li>
                        <li>Discord: <Link href='https://discord.hollow-games.cz' className='contact-link'>discord.hollow-games.cz</Link></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold'>Sociální sítě:</h1>
                    <ul className='list-disc pl-4.5'>
                        <li>Tiktok: <Link href='https://tiktok.hollow-games.cz' className='contact-link'>tiktok.hollow-games.cz</Link></li>
                        <li>Instagram: <Link href='https://instagram.hollow-games.cz' className='contact-link'>instagram.hollow-games.cz</Link></li>
                        <li>Discord: <Link href='https://discord.hollow-games.cz' className='contact-link'>discord.hollow-games.cz</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default page