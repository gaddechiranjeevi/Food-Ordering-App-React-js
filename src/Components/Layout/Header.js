import { Fragment } from 'react';
import foodImage from '../../resources/food.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';
import Itemsummary from '../Items/Itemsummary';
const Header = (props) => {
    return (
       <Fragment>
        <header className={classes.header}>
            <h1>IndianDishes</h1>
            <CartButton/>
        </header><div className={classes['main-image']}>
                <img src={foodImage} alt='A table full of food!'/>
            </div>
            <div>
                <Itemsummary />
            </div>
       </Fragment>
    );
};
export default Header;