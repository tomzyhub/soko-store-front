import React from "react";
import "../Nav/Nav.css";
import { BiStore, BiShoppingBag, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const { bagItem } = props;
  return (
    <header className="Nav__header ">
      <div className="sokoBage__container">
        <p>
          store made with
          <b className="bold">
            s<BiShoppingBag className="soko__bag__logo" />
            ko
          </b>
        </p>
      </div>
      <div className="soko__nav">
        <div className="soko__Nav__sideA">
          <Link to="/">
            <BiStore className="store" />
          </Link>
          <h3>Target</h3>
          <p>Cham Towers, Plot 12 Nkruma Rd, Kampala Ug</p>
        </div>
        <div className="soko__Nav__sideB">
          <Link to="/bagfull" className="link__B">
            <div className="soko__bag__Container">
              <div className="wrapper-active">
                <p>
                  <BiShoppingBag className="soko__bag__cart" />
                </p>
                <p>
                  Bag <span className="bag__list">{bagItem.length}</span>
                </p>
              </div>
            </div>
          </Link>
          <div className="soko__order__container">
            <Link to="/account">
              <p>
                <BiUser className="soko__account" />
              </p>
            </Link>
            <p>Account</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
