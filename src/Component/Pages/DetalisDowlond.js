import { Fragment } from 'react';
import classes from './DetalisDowlond.module.css';
import img1 from '../images/details-01.jpg';
import img2 from '../images/details-02.jpg';
import img3 from '../images/details-03.jpg';
import DetalisData from './DetalisData';

const DetalisDowlond = (poprs) => {
    return (
        <Fragment>
            <div className={classes.DetalisDowlond}>
                <div className={classes.image}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>
                <DetalisData/>

            </div>


        </Fragment>
    )
}
export default DetalisDowlond;