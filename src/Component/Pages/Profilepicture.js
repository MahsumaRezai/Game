import { Fragment } from 'react';
import Cart from './Cart';
import DataProfile from './DataProfile';
import Form from './Form';
import classes from './Profile.module.css';


const ProfilePicture = (props) => {
    return (
        <Fragment>
            <Cart>
                <div className={classes.base}>
                    <DataProfile />
                    <Form />
                </div>

            </Cart>


        </Fragment>
    )
}
export default ProfilePicture;