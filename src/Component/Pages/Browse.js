import { Fragment } from 'react';
import classes from './Browse.module.css'
import Card from './Card';
import Right from './Right';
import Left from './Left';
import Sterme from './Sterme';
import Move from './Move';
const Browse = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.borwse}>
                    <Right />
                    <Left />
                </div>
                <Sterme />
                <Move />

            </Card>

        </Fragment>
    )
}
export default Browse;