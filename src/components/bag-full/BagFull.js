import React from "react";
import "../bag-full/BagFull.css";
import Emptybag from "../emptybag/Emptybag";
import BackHomebtn from "../emptybag/BackHomebtn";
import Bag from "../bag/Bag";

const BagFull = (props) => {
  const { bagItem, onAdd, onRemove, Clear } = props;
  return (
    <div>
      <div className="bag__container">
        {bagItem.length <= 0 ? (
          <div>
            <Emptybag />
            <BackHomebtn />
          </div>
        ) : (
          <div className="setup___container">
            <div className="account__setup">Hello</div>
            <div className="bag_side">
              <Bag
                bagItem={bagItem}
                onAdd={onAdd}
                onRemove={onRemove}
                Clear={Clear}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BagFull;
