import React from "react";
import data from "../../ProductData/AllData";
import Footer from "../footer/Footer";
import "../Screen/ProductDetails.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const { onAdd, onRemove } = props;

  console.log(product);
  return (
    <div>
      <div className="product__details__container">
        <div className="product__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product__discription">
          <h3 className="product__name">{product.name}</h3>
          <p className="product__desc">{product.description}</p>
          <div className="product__pricing">
            <h3 className="product__price">
              UGX {product.price}{" "}
              <span>{product.price === "118,400" ? "-20%" : "-5%"}</span>
            </h3>
            <p className="slashed__price"> {product.slashed}</p>

            <div className="add__container">
              <BiMinus onClick={onRemove} className="btn-add" />1
              <BiPlus onClick={onAdd} className="btn-add" />
            </div>
          </div>
          <div className="action__button__container">
            <button onClick={onAdd} className="add_to_bag">
              Add to bag
            </button>

            <Link to="/bagfull">
              <button className="buy_now">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="related__component">
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
