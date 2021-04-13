import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import "../bag/Bag.css";
import Emptybag from "../emptybag/Emptybag";

const Bag = (props) => {
  const { bagItem, onAdd, onRemove } = props;
  return (
    <div>
      <h4 className="bag__header">
        Bag <span>{bagItem.length}</span>
      </h4>
      <div className="bag__container">
        {bagItem.length === 0 ? (
          <Emptybag />
        ) : (
          bagItem.map((item) => (
            <div>
              <div key={item.id} className="item__container">
                <div className="list__item">
                  <h2 className="bag__item__name">{item.name}</h2>
                  <p className="item_per_price">per piece</p>
                  <h3 className="item__price">UGX{item.price}</h3>
                  <p className="item__slashed">{item.slashed}</p>
                </div>
                <div className="add__container">
                  <BiMinus onClick={() => onRemove(item)} className="btn-add" />
                  <p>{item.qty}</p>

                  <BiPlus onClick={() => onAdd(item)} className="btn-add" />
                </div>
              </div>
            </div>
          ))
        )}
        {bagItem.length > 0 && (
          <div className="total__container">
            <p className="subtotal">
              Subtotal <p className="subtotal__span">UGX 12,700</p>
            </p>
            <p className="delivery subtotal">
              Delivery <p className="delivery__span">Free</p>
            </p>
            <div></div>
            <p className="total subtotal">
              Total <span className="total__span ">12,700</span>
            </p>
            <p className="inclusive">inclusive of all taxes</p>
            <div></div>
            <p className="conclusion">you're about to save UGX 12,700</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
