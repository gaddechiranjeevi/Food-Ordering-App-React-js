import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useContext } from 'react';

const Cart = (props) => {
    const Ctx = useContext(CartContext);

    const totalAmount = `Rs ${Ctx.totalAmount.toFixed(2)}`;
    const hasItems = Ctx.items.length > 0;
    const Ordering = ()=>{
        console.log('Order Accepted.......')
        setTimeout(()=>{
            console.log('Food is preparing.......');
        }, 5000);
        
        setTimeout(()=>{
            console.log('Delicious Food is on the way.....');
        } ,10000);
        setTimeout(()=>{
            console.log('Food Devliverd,Thank you.....');
            console.log('Visit Again......');
        },15000);
    }

    const cartItemRemoverHandler = (id) => {
        Ctx.removeItem(id);
    };
    
    const cartItemAddHandler = (item) => {
        Ctx.addItem({...item, amount: 1});
    };

    const cartitems = (
        <ul className={classes['cart-items']}>
            {Ctx.items.map((item) => (
                <CartItem
                  key = {item.id}
                  name = {item.name}
                  amount = {item.amount}
                  price = {item.price}
                  onRemove = {cartItemRemoverHandler.bind(null, item.id)}
                  onAdd = {cartItemAddHandler.bind(null, item)}
                  />
            ))}
            </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={Ordering}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;