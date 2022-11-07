import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Items from "./Components/Items/Items";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
    <Header>
      <main>
        <Items />
      </main>
    </Header>
    <Items />
    </Fragment>
  );
};

export default App;