import { Fragment } from 'react';
import classes from './Game.module.css';
import KindOfGame from './KindOfGame'
const Game = (poprs) => {
    return (
        <Fragment>
            <div className={classes.game}>
                <KindOfGame />



            </div>



        </Fragment>
    )
}
export default Game;