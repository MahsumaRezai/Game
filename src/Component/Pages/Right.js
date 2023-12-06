import { Fragment } from 'react';
import classes from './Browse.module.css';
import img1 from '../images/featured-03.jpg';
import img2 from '../images/featured-02.jpg';
import img3 from '../images/featured-01.jpg';

const Right = (props) => {
    return (
        <Fragment>
            <div className={classes.right}>
                <h2 className={classes.title}>Featured Games</h2>
                <div className={classes.warrp}>
                    <div className={classes.text}>
                        <img src={img1} alt="" />
                        <p>
                            Fortnite
                        </p>
                        <p> Sandbox</p>

                    </div>
                    <div className={classes.text}>
                        <img src={img2} alt="" />
                        <p>
                            Fortnite
                        </p>
                        <p> Sandbox</p>

                    </div>
                    <div className={classes.text}>
                        <img src={img3} alt="" />
                        <p>
                            Fortnite
                        </p>
                        <p> Sandbox</p>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}
export default Right;