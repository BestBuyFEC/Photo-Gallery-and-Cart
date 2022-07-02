import React, { useState } from "react";

function Cart({ cart, setCartToZero}) {
  const [checked, setChecked] = useState({ pickup: true, ship: false });
  const [loading, setLoading] = useState(true);
  function change(){
      if(checked.pickup === true){
          setChecked({pickup: false, ship: true})
      } else{
        setChecked({pickup: true, ship: false})
      }
  }
  if(cart.length === 0){
      return(
          <div className="main-cart-div">
              <div className="title-div">
                <h1 className="cart-title">Your cart is empty</h1>
              </div>
          </div>
      )
  } else{
      return (
          <div className="main-cart-div">
        <div className="title-div">
          <h1 className="cart-title">Your Cart</h1>
        </div>
        {cart.map((cart) => (
            <div className="cart-main-div">
            <div className="cart-pic">
              <img
                className="cart-div-pic"
                alt=""
                src={cart.image_url}
                ></img>
              <div className="cart-product-title">
                <a href="">{cart.product_name}</a>
              </div>
            </div>
            <div className="cart-place">
              <div className="pickup">
                <input
                  type="radio"
                  id="pickup"
                  value="pickup"
                  checked={checked.pickup}
                  onClick={change}
                  ></input>
                <label htmlFor="pickup">Pick up at a store near you</label>
                <div className="spacer">Eligible for curbside pickup</div>
              </div>

              <div className="ship">
                <input
                  type="radio"
                  id="ship"
                  value="ship"
                  checked={checked.ship}
                  onClick={change}
                  ></input>
                <label htmlFor="ship" className="spacer">FREE Shipping</label>
                <div className="spacer">
                  Get it <b>tomorrow</b>
                </div>
                <div className="spacer">Faster shipping is also available in checkout</div>
              </div>
            </div>
            <div className="cart-quanity">
              <select className="quanity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <a className="remove" onClick={setCartToZero}>Remove</a>
            </div>
            <div className="cart-price">${cart.price}</div>
          </div>
        ))}
    </div>
  );
}
}

export default Cart;
