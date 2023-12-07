import { Fragment } from 'react';
import StermeCard from './StermwCard';
import classes from './Sterme.module.css';
import Button from './Button'

const Sterme = (porps) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <h1 className={classes.title}>How To Start Your Live Stream</h1>
                <div className={classes.warrper}>
                    <StermeCard head='Go To Your Profile' text="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout." />
                    <StermeCard head=" Live Stream Button" text="If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com" />
                    <StermeCard head="You Are Live" text="You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website." />

                </div>
                <Button />

            </div>

        </Fragment>
    )
}
export default Sterme;