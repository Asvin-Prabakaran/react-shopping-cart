import React from 'react'

function Card({product,addtoCart}) {
  return (
    
    <div className="col-lg-4">
     <div className="card" style={{width: "15rem"}}>
     <img className="product-image" src={product.image} /> 
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">Rs.{product.price}</p>
   <button   className="button"onClick={()=>addtoCart(product)}>add to Cart</button>
  </div>
</div>
</div>

  
  )
}

export default Card