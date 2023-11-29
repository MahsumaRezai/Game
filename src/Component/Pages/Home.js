import { Fragment } from 'react';
import Card from './Card';
import classes from './Home.module.css';
import Title from './Title';
import Button from './Button';
import Game from './Game';
import Libery from './Libery';
const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.home}>
                    <Title />
                    <Button />
                </div>
                <Game />
                <Libery/>

            </Card>

        </Fragment>
    )
}
export default Home;