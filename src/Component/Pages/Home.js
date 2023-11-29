import { Fragment } from 'react';
import Card from './Card';
import classes from './Home.module.css';
import Title from './Title';
const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.home}>
                    <Title />


                </div>
            </Card>

        </Fragment>
    )
}
export default Home;