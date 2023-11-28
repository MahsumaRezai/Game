import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Head.module.css';
import img from '../images/logo.png'

const Head = (props) => {
    return (
        <Fragment>
            
            <div className={classes.head}>
                <img src={img} alt="" className={classes.logo} />

                <li><Link to='' className={classes.link}> Home </Link></li>
                <li><Link to="/Browse" className={classes.link}> Browse </Link></li>
                <li><Link to="/Details" className={classes.link}> Details </Link></li>
                <li><Link to="/Stre" className={classes.link}> Streams </Link></li>
                <li><Link to="/Profile" className={classes.link}> Profile </Link></li>


            </div>

        </Fragment>
    )
}
export default Head