import React from "react";
import "../bag-full/BagFull.css";
import Emptybag from "../emptybag/Emptybag";
import BackHomebtn from "../emptybag/BackHomebtn";

const BagFull = (props) => {
  return (
    <div>
      <div className="bag__container">
        <Emptybag />
        <BackHomebtn />
      </div>
    </div>
  );
};

export default BagFull;
