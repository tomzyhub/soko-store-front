import React from "react";
import freshFruit from "../../../assets/img/fruits.jpg";
import { BiPlus } from "react-icons/bi";
const FreshFood = () => {
  return (
    <div>
      <div className="product__container">
        <img src={freshFruit} alt="fresh bananas" />
        <h3>Fresh Banana</h3>
        <p>UGX 24,000</p>
        <button>
          <BiPlus /> Add
        </button>
      </div>
    </div>
  );
};

export default FreshFood;
