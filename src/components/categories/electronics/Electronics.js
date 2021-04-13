import React from "react";
import "../electronics/electronics.css";
import { BiPlus } from "react-icons/bi";
import Data from "../../../ProductData/ElectronicsData";
import { Link } from "react-router-dom";
const electronics = (props) => {
  const { onAdd } = props;
  return (
    <div>
      {Data.products.map((product) => (
        <div className="product__container" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <Link to={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </Link>
          <p>UGX {product.price}</p>
          <button onClick={() => onAdd(product)}>
            <BiPlus /> Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default electronics;
