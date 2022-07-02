import React from "react";

function OrderSummary({ cart }) {
  console.log(cart);
  if (cart.length > 0) {
    return (
      <div className="order-summary-main">
        <div className="summary-title">
          <h1>Order Summary</h1>
        </div>
        {cart.map((cart) => (
          <div className="add-main">
            <div className="item-total-text">Item Total</div>
            <div className="summary-item-total">${cart.price}</div>
          </div>
        ))}
        <div className="shipping-div">
          <div className="shipping">Shipping</div>
          <div className="free">FREE</div>
        </div>
        <div className="tax-div">
            <div className="tax-words">Estimated Sales Tax</div>
            <div className="tax">$18.97</div>
        </div>
        <div className="total-div">
            <div className="total-word"><b>Total</b></div>
            <div className="total-price"><b>$248.96</b></div>
        </div>
        <div className="checkout-btn-div">
        <div className="checkout-btn">
            <b>Checkout</b>
        </div>
        </div>
      </div>
    );
  } else {
      return(
        <div className="order-summary-main">
        <div className="summary-title">
          <h1>Order Summary</h1>
        </div>
          <div className="total-div-empty">
            <div className="total-word"><b>Total</b></div>
            <div className="total-price"><b>$0.00</b></div>
        </div>
        <div className="shop-btn-div">
        <div className="shop-btn">
            <b className="shop-text">Continue shopping</b>
        </div>
        </div>
      </div>
      )
  }
}

export default OrderSummary;
