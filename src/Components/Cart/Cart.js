import classes from './Cart.module.css';

const Cart = props => {
    const cartitems = (
        <ul className={classes['cart-items']}>
        {[{ id:'c1', name:'idly',amount:2,price : 30 }].map((item) => (
            <li>{item.name}</li>
            ))};
            </ul>
        );
    return (
        <div>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>45</span>
            </div>
            <div className={classes.action}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;