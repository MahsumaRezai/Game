import { Fragment } from 'react';
import Cart from './Cart';
import DataProfile from './DataProfile';
const ProfilePicture = (props) => {
    return (
        <Fragment>
            <Cart>
                <DataProfile />
            </Cart>


        </Fragment>
    )
}
export default ProfilePicture;