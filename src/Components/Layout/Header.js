import { Fragment } from 'react';
import foodImage from '../../resources/food.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
       <Fragment>
        <header className={classes.header}>
            <h1>Indian Dishes</h1>
            <button>Cart</button>
        </header><div className={classes['main-image']}>
                <img src={foodImage} alt='A table full of food!'/>
            </div>
       </Fragment>
    );
};
export default Header;