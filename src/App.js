import "./gen.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import BagFull from "./components/bag-full/BagFull";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Screen/ProductDetails";

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/bag" exact component={BagFull} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </div>
  );
}

export default App;
