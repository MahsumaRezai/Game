import { Fragment } from 'react';
import classes from './Profile.module.css';
const Cart = (props) => {
    return (
        <Fragment>
            <div className={classes.cart}>
                {props.children}

            </div>
        </Fragment>
    )
}
export default Cart;

