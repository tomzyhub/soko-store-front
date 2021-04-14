import "./gen.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import BagFull from "./components/bag-full/BagFull";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Screen/ProductDetails";
import Account from "./components/account/Account";
import { useState } from "react";

function App(props) {
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

        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </div>
  );
}

export default App;
