import React from "react";

function AddToCart({ info, fetchCart }) {
  let date = new Date();
  let day = date.getDate();
  let returnDay = day + 14;
  date = new Date().toDateString().slice(3, 7);
  console.log(date);
  console.log(returnDay);
  return (
    <div className="right-side">
      <div className="add-to-cart-main">
        {info.map((info) => (
          <h1 className="add-to-cart-price">
            <b>${info.price}</b>
          </h1>
        ))}
        <div className="returns">
            <div className="box-icon-div">
          <img
            alt=""
            className="box"
            src="https://cdn-icons-png.flaticon.com/512/35/35439.png"
          ></img>
          </div>
          <div className="combine-flex-column">
            <div className="returns-15">
              <b>15-DAY FREE & EASY RETURNS</b>
            </div>
            <div>
              If received today, the last day to return this item would be{" "}
              {date} {returnDay}
            </div>
            <a href="">Learn more {">"}</a>
          </div>
        </div>
      </div>
      <div className="how-to-get">
        <div className="when-to-get">
          <b>Get it in 7 days</b>
        </div>
        <div>
          <img
            className="pickup-icon"
            src="https://toppng.com/uploads/preview/icon-app-store-outline-of-a-shopping-ba-11563206370bnizwpqgm6.png"
            alt=""
          ></img>
          <b>Pickup:</b> Order now for pickup
        </div>
        <div className="locations">
          <a href="">See all pickup locations</a>
        </div>
        <div className="get-shipped">
          <div>
            <img
              className="ship-icon"
              alt=""
              src="https://icon-library.com/images/free-shipping-icon-png/free-shipping-icon-png-24.jpg"
            ></img>
            <b>Free shipping: </b>
            Get it by next week
          </div>
          <div className="ship-options">
            <a href="">See all shipping options</a>
          </div>
        </div>
      </div>
        <div className="add-to-cart-btn-section">
          <div className="add-to-cart-btn" onClick={fetchCart}>
            <img
              className="add-to-cart-btn-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Font_Awesome_5_solid_shopping-cart.svg"
              alt=""
            ></img>
            <b>Add to Cart</b>
          </div>
        </div>
    </div>
  );
}

export default AddToCart;
