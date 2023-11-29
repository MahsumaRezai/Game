import { Fragment } from 'react';
import classes from './Button.module.css'
const Button = (poprs) => {
    return (
        <Fragment>
            <div className={classes.button}>
                <button className={classes.btn}>
                    Browse Now
            </button>
            </div>


        </Fragment>
    )
}
export default Button;