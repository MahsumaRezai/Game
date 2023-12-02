import { Fragment } from 'react';
import classes from './Libery.module.css'
import LibOne from './LIbOne';
const Libery = (poprs) => {
    return (
        <Fragment>
            <div className={classes.libery}>
                <LibOne />


            </div>


        </Fragment>
    )
}
export default Libery;