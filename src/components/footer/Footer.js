import React from "react";
import "../footer/Footer.css";
import { FaTruck, FaAward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="soko__footer__container">
      <div className="soko__row__container ">
        <div>
          <FaTruck className="icon__truck" />
          <p>fast Delivery</p>
        </div>
        <div>
          <FaAward className="icon__award" />
          <p>Buyer Protection</p>
        </div>
        <div>
          <BiSupport className="icon__support" />
          <p>customer support</p>
        </div>
      </div>

      <div className="soko_footer__details">
        <p>STORE DETAILS</p>
        <h3>Target</h3>
        <p>Cham Towers, Plot 12 Nkruma Rd, Kampala Ug</p>
      </div>
    </footer>
  );
};

export default Footer;
