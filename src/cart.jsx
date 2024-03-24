import React from 'react'

function Cart({item,removeFromCart}) {
  return (
    <>
   
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold ">{item.name}</div>
     {item.price}
    </div>
    <button onClick={()=>removeFromCart(item)} class="badge text-bg-danger rounded-pill">x</button>
  </li>

</>
  )
}

export default Cart
