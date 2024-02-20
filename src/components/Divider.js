import React from 'react'

function Divider ({title}) {
  return ( 
    <div className='  relative'>
            {/* Divider */}
            <div className=' absolute inset-0 flex items-center'>
                <div className=' border border-slate-200 w-11/12 mx-auto'></div>
            </div>
            {/* text */}
            <div className=' flex justify-center'>
                <div className='font-display text-slate-600 text-4xl bg-white relative px-3'>SeasonSpecials</div>
                {title}
            </div>
        </div>
  )
}

export default Divider
