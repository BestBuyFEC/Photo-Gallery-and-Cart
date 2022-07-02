import React from "react";

function Details({ info }) {
  return (
    <div className="details-main">
      <div>
        <a href="">LEGO</a>
      </div>
      {info.map((info) => (
        <>
          <h1>{info.product_name}</h1>
          <div>
            <ul className="product-info-ul">
              <li className="product-info">
                <b>Model: </b>
                {info.model}
              </li>
              <li className="product-info">
                <b>SKU: </b>
                {info.sku}
              </li>
              <li className="product-info">
                <b>Release date: </b>
                {info.release_date}
              </li>
            </ul>
          </div>
          <div className="review-overview">
            <img
              className="star"
              alt=""
              src="https://freesvg.org/img/16231559165-star-rating-condensed.png?w=80&h=80&fit=fill&fm=png"
            ></img>
            <a className="review-word" href="">
              <b>5.0 </b>(41 Reviews)
            </a>
          </div>
          <div className="highly-rated">
              <p>Highly rated by customers for: <a href=''>Design, Ease of use</a></p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Details;
