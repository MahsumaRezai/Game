import { Fragment } from 'react';
import classes from './Game.module.css';
import img1 from '../images/popular-01.jpg';
import img2 from '../images/popular-02.jpg';
import img3 from '../images/popular-03.jpg';
import img4 from '../images/popular-04.jpg';
import img5 from '../images/popular-05.jpg';
import img6 from '../images/popular-06.jpg';



const Game = (poprs) => {
    return (
        <Fragment>

            <div className={classes.kind}>
                <div className={classes.cart}>
                    <img src={img1} alt="jj" className={classes.img} />
                    <p className={classes.text}>Fortnite</p>
                </div>

                <div className={classes.cart}>
                    <img src={img2} alt="jj" className={classes.img} />
                    <p className={classes.text}>PubG</p>

                </div>
                <div className={classes.cart}>
                    <img src={img3} alt="jj" className={classes.img} />
                    <p className={classes.text}>Dota2</p>


                </div>
                <div className={classes.cart}>
                    <img src={img4} alt="jj" className={classes.img} />
                    <p className={classes.text}>Mini Craft</p>

                </div>
                <div className={classes.cart}>
                    <img src={img5} alt="jj" className={classes.img} />
                    <p className={classes.text}> Eagles Fly</p>

                </div>
                <div className={classes.cart}>
                    <img src={img6} alt="jj" className={classes.img} />
                    <p className={classes.text}> Warcraft
                      Legend</p>
                </div>

            </div>




        </Fragment>
    )
}
export default Game;