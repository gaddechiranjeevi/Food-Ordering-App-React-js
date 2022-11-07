import { useContext } from 'react';
import Icon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const Ctx = useContext(CartContext);
    
    const numberOfItemsInCart = Ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0); 
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
           <Icon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
    );
};

export default CartButton;