import { Fragment, useState } from 'react';
import Header from "./Components/Layout/Header";
import Items from "./Components/Items/Items";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </Fragment>
  );
}

export default App;