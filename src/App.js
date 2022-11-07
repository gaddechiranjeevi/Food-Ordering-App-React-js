import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Items from "./Components/Items/Items";

function App() {
  return (
    <Fragment>
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