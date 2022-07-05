import React from "react";

function Details({ info }) {
  return (
    <div className="details-main">
      <div>
        <a className="brandTitle" href="">LEGO</a>
      </div>
      {info.map((info) => (
        <>
          <h1 className="infoTitle">{info.product_name}</h1>
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
            <div className="starReviewContainer">

              <img
                className="star"
                alt=""
                src="https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png"
              ></img>
              <img
                className="star"
                alt=""
                src="https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png"
              ></img>
              <img
                className="star"
                alt=""
                src="https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png"
              ></img>
              <img
                className="star"
                alt=""
                src="https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png"
              ></img>
              <img
                className="star"
                alt=""
                src="https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png"
              ></img>
              <a className="review-word" href="">
              <b>5.0 </b>(41 Reviews)
              </a>
            </div>

            <div className="highly-rated">
              <p>Highly rated by customers for: <a href=''>Design, Ease of use</a></p>
          </div>
          </div>

        </>
      ))}
    </div>
  );
}

export default Details;
