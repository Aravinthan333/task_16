import { useState } from "react";
import propTypes from "prop-types";
import data from "./products.json";

var cartCount = 0;
const Card = ({ title, brand, images, price }) => {
  const [inCart, setCart] = useState(false);
  const [count, setCount] = useState(cartCount);
  const additems = () => {
    if (inCart) {
      setCart(false);
      setCount(count - 1);
    } else {
      setCart(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="card">
      <div className="image">
        <img src={images[0]} />
      </div>
      <h3 className="product">{title}</h3>
      <h3 className="brand">{brand}</h3>

      <p className="price">$ {price}</p>
      <button className="button" onClick={additems}>
        {inCart ? "Remove from" : "Add to"} cart
      </button>
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string,
  price: propTypes.number,
  images: propTypes.arrayOf(propTypes.string),
  brand: propTypes.string,
};

export default function Cards() {
  return (
    <>
      <div className="cards">
        {data.products.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    </>
  );
}
