import "./App.css";
import PicCarousel from "./components/Carousel";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Details from "./components/Details";
import AddToCart from "./components/AddToCart";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function fetchImg() {
      let call = await fetch(
        `http://${window.location.hostname}:3001/api/product/image/1`
      );
      let data = await call.json();
      setImages(data);
    }
    async function fetchProduct() {
      let call = await fetch(
        `http://${window.location.hostname}:3001/api/product/1`
      );
      let data = await call.json();
      setInfo(data);
    }
    fetchImg();
    fetchProduct();
    setLoading(false);
  }, []);

  async function fetchCart() {
    let call = await fetch(
      `http://${window.location.hostname}:3001/api/cart/1`
    );
    let data = await call.json();
    setCart(data);
  }

  function setCartToZero(){
    setCart([])
  }
  
  if (!loading) {
    return (
      <div className="App">
        <div className="details-add-main">
          <div className="details-second">
            <Details info={info} />
            <PicCarousel images={images} />
          </div>
          <AddToCart info={info} fetchCart={fetchCart} />
        </div>
        {/* <div className="order-summary-flex">
        <Cart images={images} cart={cart} setCartToZero={setCartToZero}/>
        <OrderSummary cart={cart}/>
        </div> */}
      </div>
    );
  }
}

export default App;
