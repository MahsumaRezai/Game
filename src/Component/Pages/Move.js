import classes from './Move.module.css';
import img1 from '../images/stream-01.jpg';
import profile1 from '../images/avatar-01.jpg'
const Move = (props) => {
    return (
        <div className={classes.move}>
            <h1 className={classes.title}>Most Popular Live Stream</h1>
            <div>
                <div className={classes.chart}>
                    <img src={img1} alt="" />
                    <div>
                        <img alt="" src={profile1} />
                        <p> KenganC</p>
                    </div>
                </div>


            </div>



        </div>
    )
}
export default Move;