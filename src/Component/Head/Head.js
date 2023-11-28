import { Fragment } from 'react';
import { Link } from 'react-router-dom'
const Head = (props) => {
    return (
        <Fragment>
            <ul>
                <li><Link to=''> Home </Link></li>
                <li><Link to="/Browse"> Browse </Link></li>
                <li><Link to="/Details"> Details </Link></li>
                <li><Link to="/Stre"> Streams </Link></li>
                <li><Link to="/Profile"> Profile </Link></li>


            </ul>

        </Fragment>
    )
}
export default Head