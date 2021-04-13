import React, { useState, useEffect } from "react";
import Electronics from "../categories/electronics/Electronics";
import Furniture from "../categories/furniture/Furniture";
import FreshFood from "../categories/freshFood/FreshFood";
import Search from "../search/Search";
import Bag from "../bag/Bag";
import "../Home/Home.css";
import AllCategories from "../categories/All-category/AllCategories";
import Footer from "../footer/Footer";

const Home = () => {
  const [Activepage, setActivepage] = useState("");
  const [bagItem, setbagItem] = useState([]);

  const onAdd = (product) => {
    const exist = bagItem.find((x) => x._id === product._id);
    if (exist) {
      setbagItem(
        bagItem.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setbagItem([...bagItem, { ...product, qty: 1 }]);
    }
    // console.log(exist);
  };

  const onRemove = (product) => {
    const exist = bagItem.find((x) => x._id === product._id);
    if (exist) {
      setbagItem(
        bagItem.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    } else {
      setbagItem([...bagItem, { ...product, qty: 1 }]);
    }
    // console.log(exist);
  };

  let content = null;
  if (Activepage === "furniture") {
    content = <Furniture onAdd={onAdd} />;
  } else if (Activepage === "freshfood") {
    content = <FreshFood onAdd={onAdd} />;
  } else if (Activepage === "electronics") {
    content = <Electronics onAdd={onAdd} />;
  } else if (Activepage === "all") {
    content = <AllCategories onAdd={onAdd} />;
  }

  useEffect(() => {
    setActivepage("all");
  }, []);
  return (
    <div>
      <Search />
      <div className="Home__grid">
        <div className="button__side">
          <button onClick={() => setActivepage("electronics")}>
            Electronics (2)
          </button>
          <button onClick={() => setActivepage("freshfood")}>
            FreshFood (4)
          </button>
          <button onClick={() => setActivepage("furniture")}>
            Furniture (3)
          </button>
          <button onClick={() => setActivepage("all")}>
            view all Categories
          </button>
        </div>
        <div className="product__display">
          {/* <AllCategories /> */}
          {content}
        </div>
        <div className="bag__display">
          <Bag bagItem={bagItem} onAdd={onAdd} onRemove={onRemove} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
