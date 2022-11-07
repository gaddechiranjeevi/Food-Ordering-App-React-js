import { Fragment } from "react";
import Itemsummary from "./Itemsummary";
import AvailableItems from "./AvailableItems";

const Items = () => {
       return(
        <Fragment>
            <Itemsummary />
            <AvailableItems />
        </Fragment>
       );
};

export default Items;