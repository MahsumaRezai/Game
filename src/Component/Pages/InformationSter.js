import { Fragment } from 'react';
import Card from './Card';
import classes from './StermSection.module.css';
import img1 from '../images/stream-05.jpg';
import img2 from '../images/stream-06.jpg';
import img3 from '../images/stream-07.jpg';
import img4 from '../images/stream-08.jpg';
import profile1 from '../images/avatar-01.jpg';
import profile2 from '../images/avatar-02.jpg';
import profile3 from '../images/avatar-03.jpg';
import profile4 from '../images/avatar-04.jpg';

const Information = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.section}>
                    <h1 className={classes.title}>Most Popular Live Stream</h1>
                    <div className={classes.content}>
                        <div className={classes.chart}>
                            <img src={img1} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile1} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>
                            <img src={img2} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile2} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>
                            <img src={img3} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile3} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>

                            <img src={img4} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile4} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                    </div>
                    <div className={classes.content}>
                        <div className={classes.chart}>
                            <img src={img2} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile1} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>
                            <img src={img1} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile2} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>
                            <img src={img4} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile3} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                        <div className={classes.chart}>

                            <img src={img3} alt="" className={classes.image} />
                            <div className={classes.chartimg}>
                                <img alt="" src={profile4} />
                                <p className={classes.para}> KenganC</p>
                            </div>
                        </div>

                    </div>






                </div>

            </Card>

        </Fragment>
    )
}
export default Information;