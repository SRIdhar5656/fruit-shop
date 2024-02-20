
import React, { useState } from 'react'
import FruitsCard from './FruitsCard'
import Divider from './Divider'

function SeasonSpecials() {
    const[Fruits,setfruits] = useState([
        {  id:4,
            image:'4',
            name:'Water Apple',
            price:200
        },
        {  id:2,
            image:'2',
            name:'Custord Apple',
            price:200
        },
        {
            id:1,
           image:'1',
           name:'Green Apple',
           price:80
       },
    ])
  return (
    
    <section className='w-5/6 mx-auto my-10'>
        <Divider title={''}/>
    <div className=' w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  my-10 py-10'>
    {
        Fruits.map((fruit) => {
            return <FruitsCard key={fruit.id} fruit={fruit} />

         
        })
    }
        </div>    
    </section>
    
  )
}

export default SeasonSpecials
