import React from "react";
import sadFace from "../../assets/img/empty.png";
const Emptybag = () => {
  return (
    <div>
      <div className="empty__container">
        <img src={sadFace} alt="cart empty" />
        <h3>it's empty here </h3>
        <p>start shopping to add items to your bag</p>
      </div>
    </div>
  );
};

export default Emptybag;
