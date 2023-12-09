import { Fragment } from 'react'
import Card from './Card';
import HomeDetalis from './HomeDetalis';
import DetalisDowlond from './DetalisDowlond';
import LibOne from './LIbOne';
import Libery from './Libery';
const Detalis = (props) => {
    return (
        <Fragment>
            <Card>
                <HomeDetalis />
                <DetalisDowlond />
                <Libery></Libery>
                <Libery></Libery>
                <Libery></Libery>
            </Card>

        </Fragment>
    )
}
export default Detalis