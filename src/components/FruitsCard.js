import React from 'react'

function FruitsCard ({fruit}) {
  return (
    <div>
      <img src={require(`../assests/${fruit.image}.jpg`)} alt={`${fruit.image}`} />
      <div>
        <span>{fruit.name}</span>
        <span>{fruit.price}</span>
      </div>
    </div>
  )
}

export default FruitsCard
