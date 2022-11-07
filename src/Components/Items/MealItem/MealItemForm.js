import classes from './MealItemForm.module.css';
import Input from '../../UI/input';

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
        <Input label="Amount" 
         input={{
            id:'Amount',
            type:'Number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
         }} 
        />
        <button>Add to Cart</button>
       </form>
    );
};

export default MealItemForm;