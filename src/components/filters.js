import React, { useState } from 'react'

function Filters() {
const [select,setselected] = useState('')

  return (
    <div>
      <section className='my-10 py-4 md:w-4/6 w-3/5 mx-auto flex flex-col md:flex-row justify-around'>
        <button onClick={()=> setselected(1)} className={`mennu1 ${select === 1 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={()=> setselected(2)} className={`mennu1 ${select === 2 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Best selling</button>
        <button onClick={()=> setselected(3)} className={`mennu1 ${select === 3 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Specials</button>
      </section>
    </div>
  )
}

export default Filters
