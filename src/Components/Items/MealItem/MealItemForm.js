import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/input';

const MealItemForm = (props) => {
  const [amountIsVaild, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

      const  submitHandler = (event) => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = + enteredAmount;

        if (
          enteredAmount.trim().length === 0 || 
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5
          ) {
          setAmountIsValid(false);
          return;
        }

        props.onAddToCart(enteredAmountNumber);        
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label='Amount'
         input={{
            id:'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
         }} 
        />
        <button>Add to Cart</button>
        {!amountIsVaild && <p>Please Enter a Valid Amount(1-5).</p>}
       </form>
    );
};

export default MealItemForm;