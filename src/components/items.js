import React, { useState } from 'react'
import FruitsCard from './FruitsCard'

function Items() {
    const[Fruits,setfruits] = useState([
       {
         id:1,
        image:'1',
        name:'mango',
        price:80
    },

      {  id:2,
        image:'2',
        name:'Dumbroot',
        price:200
    },

    { id:3,
        image:'3',
        name:'mango1',
        price:150
    },
    {  id:4,
        image:'4',
        name:'Kiwi',
        price:200
    },
    {  id:5,
        image:'5',
        name:'orange',
        price:100
    },
    {  id:6,
        image:'6',
        name:'Grapes',
        price:100
    },
    ])
  return (
   <section className=' w-5/6 mx-auto grid grid-cols-3'>
    {
        Fruits.map((fruit) => {
            return <FruitsCard key={fruit.id} fruit={fruit} />

         
        })
    }
   </section>
      
   
  )
}

export default Items
