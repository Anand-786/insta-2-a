import React from 'react'

function Storyme({ img, username }) {
  return (
    <div>
        <div className='relative hover:scale-110 transition transform duration-200 ease-out'>
          <img className='h-14 w-14 rounded-full p-[1.5px] object-contain 
          cursor-pointer border-red-500 
          border-2' src={img} alt='' />
          <button className="absolute bottom-0 -right-1 bg-blue-500 h-6 w-6 rounded-full text-white text-xl 
          font-bold border-2 border-white flex justify-center items-center font-mono
          ">+</button>
        </div>
        <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Storyme