import "./gen.min.css";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import BagFull from "./components/bag-full/BagFull";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Screen/ProductDetails";
import Account from "./components/account/Account";

function App(props) {
  const [bagItem, setbagItem] = useState([]);

  // add to bag function and product increament
  //  if product exist in bag
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
  };

  // remove from bag function and product increament
  //  if product exist in bag
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
  };

  // clear bag function
  const Clear = () => {
    setbagItem([]);
  };

  return (
    <div className="container">
      <Nav bagItem={bagItem} />
      <Switch>
        <Route path="/account" exact component={Account} />
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              {...props}
              bagItem={bagItem}
              onAdd={onAdd}
              onRemove={onRemove}
              Clear={Clear}
            />
          )}
        />
        <Route
          path="/product/:id"
          exact
          render={(props) => (
            <ProductDetails {...props} onAdd={onAdd} onRemove={onRemove} />
          )}
        />
        <Route
          path="/bagfull"
          exact
          render={(props) => (
            <BagFull
              {...props}
              bagItem={bagItem}
              onAdd={onAdd}
              onRemove={onRemove}
              Clear={Clear}
            />
          )}
        />

        <Route
          path="/"
          render={() => (
            <div className="lost">404 i think you are lost 😕✨</div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
