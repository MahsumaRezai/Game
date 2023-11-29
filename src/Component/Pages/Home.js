import { Fragment } from 'react';
import Card from './Card';
import classes from './Home.module.css';
const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.home}>

                </div>
            </Card>

        </Fragment>
    )
}
export default Home;