import { Fragment } from 'react';
import img1 from '../images/feature-left.jpg';
import img2 from '../images/feature-right.jpg';
import classes from './Detalis.module.css';

const HomeDetalis = (props) => {
    return (
        <Fragment>
            <div className={classes.wapper}>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className={classes.top}>
                    <img src={img2} alt="" />
                    <div className={classes.btn}>
                        <div className={classes.btnstyle}>

                        </div>

                    </div>


                </div>
            </div>
            <div className={classes.text}>
                <h1>FORTNITE DETAILS</h1>
            </div>


        </Fragment>
    )
}
export default HomeDetalis