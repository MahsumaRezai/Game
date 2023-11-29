import { Fragment } from 'react';
import classes from './Title.module.css'

const Title = (props) => {
    return (
        <Fragment>
            <div className={classes.warrper}>
                <h3 className={classes.title}>Welcome to this game</h3>
                <span className={classes.para}> BROWSE OUR POPULAR<br></br> GAMES HERE</span>

            </div>
        </Fragment>
    )
}
export default Title;