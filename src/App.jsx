import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Card from './card'
import Cart from './cart'
import { useState } from 'react'




function App() {

  let products = [
    {
      id : 1,
      name : "GoPro Hero 12",
      image :"https://www.dpreview.com/files/p/articles/9227663809/WBrawley_DPR_GoProHero12_DSCF2111.jpeg",
      price : 50000
    },
    {
      id : 2,
      name : "DJI Mavic 4",
      image :"https://bgr.com/wp-content/uploads/2023/11/dji-mini-4-pro-6.jpg?resize=1536%2C864&quality=82",
      price : 125000
    },
    {
      id : 3,
      name : "insta360",
      image :"https://www.myinsta360.com/cdn/shop/products/Insta360X3_LaunchKV_TransparentBackground_grande.png?v=1662644877",
      price : 30000
    },
    {
      id : 4,
      name : "insta360 Go 3",
      image :"https://m.media-amazon.com/images/I/41I0sHkN6uL._SX300_SY300_QL70_FMwebp_.jpg",
      price : 70000
    },
    {
      id : 5,
      name : "DJI ND Filter",
      image :"https://www.designinfo.in/wp-content/uploads/2023/05/drone-filters-optimized.jpeg",
      price : 5000
    },
    {
      id : 6,
      name : "DJI Osmo Pocket 3",
      image :"https://fotocentreindia.com/wp-content/uploads/DJI-Osmo-Pocket-3-Camera-Online-Buy-Mumbai-India_5.jpg",
      price : 50000
    },
  ];

  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };
  
  let removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price)
  }
  
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
         <div className="row">
          <div style={{color:'white'}}className="col-lg-12"><h1>product</h1></div>
         </div>
         <div className="row">
          {products.map((product,index,)=>{
            return <Card product={product} key={index} addtoCart={addToCart}/>

          })}

         </div>
        </div>
        <div style={{color:'white'}} className="col-lg-3">
          <h1>cart</h1>
        {
          cart.length == 0 ? <div>
            no items in cart </div> :<>
            <ol class="list-group list-group-numbered">
          {cart.map((item,index)=>{
            return <Cart item={item} key={index} removeFromCart={removeFromCart}/>
          })}
          </ol>
          <h1>total= Rs.{total}</h1>
          </>
        }
        
        </div>
      </div>
    </div>
    </>
  )
}

export default App
