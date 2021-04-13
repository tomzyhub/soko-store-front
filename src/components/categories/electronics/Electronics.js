import React from "react";
import blender from "../../../assets/img/blender.jpg";
import "../electronics/electronics.css";
import { BiPlus } from "react-icons/bi";
const electronics = () => {
  return (
    <div>
      <div className="product__container">
        <img src={blender} alt="home fitted blender" />
        <h3>Fitted Home blender</h3>
        <p>UGX 185,000</p>
        <button>
          <BiPlus /> Add
        </button>
      </div>
    </div>
  );
};

export default electronics;
