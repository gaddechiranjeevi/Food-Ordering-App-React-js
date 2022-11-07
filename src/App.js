import { useState } from 'react';
import Header from "./Components/Layout/Header";
import Items from "./Components/Items/Items";
import Cart from "./Components/Cart/Cart";
import Cartprovider from './store/CartProvide';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Cartprovider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </Cartprovider>
  );
}

export default App;