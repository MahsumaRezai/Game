import { Fragment } from 'react';
import classes from './StermSection.module.css';
import Card from './Card';
import Information from './InformationSter';
const StermSection = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.sections}>
                    <Information />




                </div>

            </Card>

        </Fragment>
    )
}
export default StermSection;