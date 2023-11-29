import { Fragment } from 'react';
import classes from './Game.module.css';
import img1 from '../images/popular-01.jpg';
import img2 from '../images/popular-02.jpg';

const Game = (poprs) => {
    return (
        <Fragment>
            <div className={classes.kind}>
                <div>
                    <h1>Most Popular Right Now</h1>
                </div>
                <div className={classes.cart}>
                    <img src={img1} alt="jj" />

                </div>
                <div className={classes.cart}>
                    <img src={img2} alt="jjj" />

                </div>


            </div>




        </Fragment>
    )
}
export default Game;