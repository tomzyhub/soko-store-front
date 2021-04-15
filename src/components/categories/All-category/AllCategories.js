import React from "react";
import Electronics from "../electronics/Electronics";
import Furniture from "../furniture/Furniture";
import FreshFood from "../freshFood/FreshFood";
const AllCategories = (props) => {
  const { onAdd } = props;
  return (
    <div>
      <Electronics onAdd={onAdd} />
      <Furniture onAdd={onAdd} />
      <FreshFood onAdd={onAdd} />
    </div>
  );
};

export default AllCategories;
