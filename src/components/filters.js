import React, { useState } from 'react'

function Filters() {
const [select,setselected] = useState(1)

  return (
    <div>
      <section className='my-10 py-4 w-4/6 mx-auto flex justify-around'>
        <button onClick={()=> setselected} className={`mennu1 ${select === 1 ? 'hover:bg-green-400':'text-slate-500'}`}>Latest</button>
        <button onClick={()=> setselected} className='mennu1'>Best selling</button>
        <button onClick={()=> setselected} className='mennu1'>Specials</button>
      </section>
    </div>
  )
}

export default Filters
