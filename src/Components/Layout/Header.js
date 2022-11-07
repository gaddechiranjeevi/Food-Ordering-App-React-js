import { Fragment } from 'react';
import foodImage from '../../resources/food.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';
const Header = (props) => {
    return (
       <Fragment>
        <header className={classes.header}>
            <h1>Indian Dishes</h1>
            <CartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
                <img src={foodImage} alt='A table full of food!'/>
            </div>
       </Fragment>
    );
};
export default Header;