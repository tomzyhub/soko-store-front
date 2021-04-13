import React from "react";
import { Link } from "react-router-dom";
const BackHomebtn = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn">Back To Home</button>
      </Link>
    </div>
  );
};

export default BackHomebtn;
