import { Fragment } from 'react';
import classes from './Libery.module.css';
import img1 from '../images/game-01.jpg'
const LibOne = (poprs) => {
    return (
        <Fragment>
            <div className={classes.lib}>

                <div>
                    <img src={img1} alt="" className={classes.img} />
                </div>
                <div className={classes.text}>
                    <p>Dota 2</p>
                    <p>Sandbox</p>
                </div>
                <div className={classes.text}>
                    <p>Date Added </p>
                    <p> 24/08/2036 </p>
                </div>
                <div className={classes.text}>
                    <p> Hours Played</p>
                    <p> 634 H 22 Mins</p>
                </div>
                <div className={classes.text}>
                    <p> Currently</p>
                    <p> Downloaded</p>
                </div>
                <div >
                    <button className={classes.btn}><span className={classes.btntext}>
                        Download
                        </span></button>
                </div>


            </div>


        </Fragment>
    )
}
export default LibOne;