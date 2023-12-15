import { Fragment } from 'react';
import img1 from '../images/profile.jpg';
import classes from './Profile.module.css';

const DataProfile = (props) => {
    return (
        <Fragment >
            <div className={classes.wapper}>
                <div className={classes.data}>
                    <div>
                    <img src={img1} alt="" className={classes.image}  />

                    </div>
                    <div className={classes.link}>
                    <li className={classes.links}>OffLine</li>
                    <h4>Alan Smithee</h4>
                    <p>You Haven't Gone Live yet.<br></br> Go Live By Touching The Button Below.
                    
</p>
                    <button className={classes.btn}>Start Live Stream</button>
                    </div>
                </div>



         
        
        
        
            </div>

        </Fragment>
            )
        }
export default DataProfile;