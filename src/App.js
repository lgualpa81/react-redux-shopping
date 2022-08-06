import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import { Header } from "./containers/Header";
import { ProductDetail } from "./containers/ProductDetail";
import { ProductList } from "./containers/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/product/:productId" exact component={ProductDetail}></Route>
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
