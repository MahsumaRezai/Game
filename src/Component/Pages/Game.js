import { Fragment } from 'react';
import classes from './Game.module.css';
import KindOfGame from './KindOfGame'
const Game = (poprs) => {
    return (
        <Fragment>
            <div className={classes.game}>
                <h1 className={classes.title}>Most Popular Right Now</h1>
                <KindOfGame />



            </div>



        </Fragment>
    )
}
export default Game;