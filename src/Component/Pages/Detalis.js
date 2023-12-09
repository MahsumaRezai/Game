import { Fragment } from 'react'
import Card from './Card';
import HomeDetalis from './HomeDetalis';
import DetalisDowlond from './DetalisDowlond';
const Detalis = (props) => {
    return (
        <Fragment>
            <Card>
                <HomeDetalis />
                <DetalisDowlond />

            </Card>

        </Fragment>
    )
}
export default Detalis