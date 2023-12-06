import { Fragment } from 'react';
import StermeCard from './StermwCard';
import classes from './Sterme.module.css';

const Sterme = (porps) => {
    return (
        <Fragment>
            <div>
                <div className={classes.warrper}>
                    <StermeCard head='Go To Your Profile' text="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout." />
                    <StermeCard head=" Live Stream Button" text="If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com" />
                    <StermeCard head="You Are Live" text="You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website." />

                </div>
            </div>

        </Fragment>
    )
}
export default Sterme;