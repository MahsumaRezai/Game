import { Fragment } from 'react';
import classes from './Browse.module.css';
import img1 from '../images/game-01.jpg'
const Left = (props) => {
    return (
        <Fragment>
            <div className={classes.left}>
                <h1 className={classes.top}>Top Downloaded</h1>
                <div className={classes.toplevel}>
                    <img src={img1} alt="" />
                    <p className={classes.para}>Fortnite</p>
                    <button className={classes.dowloned}>  <span>Downloaded</span></button>

                </div>
                <div className={classes.toplevel}>
                    <img src={img1} alt="" />
                    <p className={classes.para}>Fortnite</p>
                    <button className={classes.dowloned}>  <span>Downloaded</span></button>
                </div>
                <div className={classes.toplevel}>
                    <img src={img1} alt="" />
                    <p className={classes.para}>Fortnite</p>
                    <button className={classes.dowloned}>  <span>Downloaded</span></button>
                </div>






            </div>


        </Fragment>
    )
}
export default Left;