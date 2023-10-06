import React from 'react'

function Button() {

  return (
    <div className='flex flex-row border-2 bg-indigo-900 border-slate-400 h-auto w-full px-6 py-2 justify-center align-center shadow-sm hover:shadow-lg cursor-pointer rounded-lg'>
        <h2 className='text-white font-semibold'>
            Subscribe to monthly newsletter.
        </h2>
    </div>
  )
}

export default Button