import { Fragment } from 'react';
import classes from './Sterme.module.css';
const StermeCard = (props) => {
    return (
        <Fragment>
            <div className={classes.card} >
                <h1 className={classes.head}>{props.head}</h1>
                {props.children}
                <p className={classes.text}>{props.text}</p>


            </div>

        </Fragment>
    )
}
export default StermeCard;