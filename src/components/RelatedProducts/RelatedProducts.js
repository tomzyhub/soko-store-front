import React from "react";
import "../RelatedProducts/Relatedproducts.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import data from "../../ProductData/furnitureData";
const RelatedProducts = () => {
  const furniture = data.products;
  return (
    <div className="relatedProducts__container">
      <h4>RELATED PRODUCTS</h4>
      <div className="arrow__container">
        <IoIosArrowBack className="arrow_one" />
        <IoIosArrowForward className="arrow_two" />
      </div>
      <div className="relatedP__parent">
        {furniture.map((item) => (
          <div key={item._id} className="relatedP__box">
            <img
              src={item.image}
              alt={furniture.name}
              className="relatedP__img"
            />
            <p className="relatedP__desc">{item.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
