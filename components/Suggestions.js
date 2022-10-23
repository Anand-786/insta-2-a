import React from 'react'

const names = ['Ankur@43', 'Ayush_3001','Priya@071','Pooja_Tiwari','Sunny_2025'];
const works = ['Reliance Industries', 'Infosys', 'Apple Inc.', 'Amazon.com', 'Microsoft'];

function Suggestions() {
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-500'>Suggestions for you</h3>
        <button className='text-gray-700 font-semibold'>See all</button>
      </div>

      {names.map((profile, ind) => {
        return (
          <div key={ind} className='flex items-center justify-between mt-3'>
            <img className='w-10 h-10 rounded-full border p-[2px]' src={'./'+(31+ind)+'.jpg'} alt='' />
            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>{profile}</h2>
              <h3 className='text-xs text-gray-500'>Works At {works[ind]}</h3>
            </div>
            <button className='text-blue-500 text-xs font-bold'>Follow</button>
          </div>
        );
      })}
    </div>
  )
}

export default Suggestions