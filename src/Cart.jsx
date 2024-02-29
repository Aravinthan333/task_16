import { useState } from "react";

const Cart = ({ title, description, brand, images, category, price }) => {
  const [noOfProduct, setNoOfProduct] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const remove = () => {
    setNoOfProduct(0);
    setSubtotal(0);
  };

  const handleChange = (e) => {
    setNoOfProduct(e.target.value);
    setSubtotal(e.target.value * price);
  };

  return (
    <>
      <div className="background">
        <div className="product">
          <div className="productDetails">
            <div>
              <img src={images[0]} />
            </div>
            <div>
              <h1>{title}</h1>
              <h3>{brand}</h3>
              <p>{description}</p>
              <h3>{category}</h3>
            </div>
          </div>
          <div>
            <div className="multiply">
              <select onChange={handleChange} value={noOfProduct}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
              <h3>$ {subtotal}</h3>
            </div>
            <div className="remove">
              <button onClick={remove}>Remove</button>
            </div>
          </div>
        </div>

        <hr />

        <div className="viewit">
          <div className="left">
            <h3>subtotal</h3>
            <h3>shipping</h3>
          </div>
          <div className="right">
            <h3>$ {subtotal}</h3>
            <h3>Free</h3>
          </div>
        </div>

        <hr />

        <div className="viewit">
          <h3 className="left">Total</h3>
          <h3 className="right">$ {subtotal}</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
