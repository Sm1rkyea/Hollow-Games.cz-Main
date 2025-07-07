import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black/80 bg-cover">
      <h1 className="text-[6rem] font-bold text-center">404</h1>
      <p className='text-black/70 dark:text-white/70 -mt-4'>Tato stránka nebyla nalezena</p>
    </div>
  )
}

export default NotFound;