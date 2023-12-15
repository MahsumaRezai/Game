import { Fragment } from 'react';
import Card from './Card';
import ProfilePicture from './Profilepicture';
import Game from './Game';
import Libery from './Libery';
import Titlelite from './Titlelite';

const Profile = (props) => {

    return (
        <Fragment>
            <Card>
                <ProfilePicture />
                <Game />
                <Titlelite/>
                <Libery />
                <Libery />
                <Libery />


            </Card>

        </Fragment>
    )
}
export default Profile;