import React from "react";
import "../bag/Bag.css";
import Emptybag from "../emptybag/Emptybag";

const Bag = (props) => {
  const { bagItem } = props;
  return (
    <div>
      <h4 className="bag__header">
        Bag <span>{bagItem.length}</span>
      </h4>
      <div className="bag__container">
        {bagItem.length === 0 && <Emptybag />}
      </div>
    </div>
  );
};

export default Bag;
