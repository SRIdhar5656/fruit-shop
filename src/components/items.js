import React, { useState } from 'react'
import FruitsCard from './FruitsCard'

function Items() {
    const[Fruits,setfruits] = useState([
       {
         id:1,
        image:'1',
        name:'Green Apple',
        price:80
    },

      {  id:2,
        image:'2',
        name:'Custord Apple',
        price:200
    },

    { id:3,
        image:'3',
        name:'Mango',
        price:150
    },
    {  id:4,
        image:'4',
        name:'Water Apple',
        price:200
    },
    {  id:5,
        image:'5',
        name:'orange',
        price:100
    },
    {  id:6,
        image:'6',
        name:'Green Grapes',
        price:100
    },
    ])
  return (
   <section className=' w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  my-10 py-10'>
    {
        Fruits.map((fruit) => {
            return <FruitsCard key={fruit.id} fruit={fruit} />

         
        })
    }
   </section>
      
   
  )
}

export default Items
