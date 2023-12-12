import { Fragment } from 'react';
import Card from './Card';
import ProfilePicture from './Profilepicture';

const Profile = (props) => {

    return (
        <Fragment>
            <Card>
                <ProfilePicture />

            </Card>

        </Fragment>
    )
}
export default Profile;