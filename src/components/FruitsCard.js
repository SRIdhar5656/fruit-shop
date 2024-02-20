import React from 'react'

function FruitsCard ({fruit}) {
  return (
    <div className=' rounded-3xl overflow-hidden shadow-lg group transform hover:scale-110 duration-100 relative'>
      <img className='w-11/12 h-3/4 object-cover'  src={require(`../assests/${fruit.image}.jpg`)} alt={`${fruit.image}`} />
      <div className='flex flex-col items-center my-2 py-2 '>
        <span className='font-bond text-slate-500 block'>{fruit.name}</span>
        <span className='font-bond text-slate-500 my-2'>₹ {fruit.price}</span>
        <span className='font-bond text-lime-500 my-2 uppercase text-xs group-hover:visible  invisible'>add to cart</span>
      </div>
      <span className='absolute top-3 right-3 bg-emerald-500 rounded-2xl py-2 px-2 font-bond text-white text-sm'>10% off</span>
    </div>
  )
}

export default FruitsCard
