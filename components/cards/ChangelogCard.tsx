import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { changelogItems } from '@/constants/changelog'

const ChangelogCard = () => {
  const recentItems = changelogItems.slice(-3).toReversed();

  return (
    <div className='w-[70%] max-sm:w-[85%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
      {recentItems.map((item, index) => {
        const lines = item.description.flatMap((desc) => {
          const lineArray = []
          let charCount = 0
          for (const [key, value] of Object.entries(desc)) {
            charCount += value.length
            lineArray.push(value)
            if (charCount > 200) {
              lineArray[lineArray.length - 1] = value.slice(0, 200 - (charCount - value.length)).trim() + '...'
              break
            }
          }
          return lineArray
        })

        return (
          <div
            key={index}
            className="rounded-[10px] hover:shadow-lg shadow-md dark:shadow-none overflow-hidden bg-white/80 dark:bg-dark-500 transition-all"
          >
            <div className="relative h-[230px] w-[105%]">
              <Image
                src={item.imgSrc}
                alt="Image"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-left">
              <Badge variant="secondary" className={item.category === 'Novinka' ? 'bg-slate-300 dark:bg-slate-800/40' : item.category === 'Aktualizace' ? 'bg-lime-600/40 dark:bg-lime-600/10' : item.category === 'Odebráno' ? 'bg-red-600/30 dark:bg-red-400/10' : 'bg-slate-200 dark:bg-slate-800/30'} asChild>
                <span>{item.category}</span>
              </Badge>

              <div className="pl-[1px] pt-1.5">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <p className="pt-2 text-md text-gray-500">
                  {lines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              <div>
                <Link
                  href={`/changelog/${item.id}`}
                  target='_blank'
                  className="-mt-3 p-3 block text-center bg-gray-600/10 hover:bg-gray-600/20 dark:bg-gray-600/20 dark:hover:bg-gray-600/30 rounded-lg transition-all"
                >
                  Číst více
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChangelogCard
