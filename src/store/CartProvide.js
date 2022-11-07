import CartContext from "./cart-context"

const Cartprovider = props => {
    const addItemToCartHandler = item => {};

    const removeItemToCartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };
return (
<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
);
};

export default Cartprovider;