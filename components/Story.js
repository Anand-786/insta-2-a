import React from 'react'

function Story({ img, username }) {
  return (
    <div>
        <img className='h-14 w-14 rounded-full p-[2.5px] object-contain 
        cursor-pointer border-red-600 
        border-2 hover:scale-110 transition transform duration-200 ease-out' src={'./'+img+'.jpg'} alt='' />
        <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story