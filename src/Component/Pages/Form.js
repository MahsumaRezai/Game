import classes from './Form.module.css'
const Form = (props) => {
    return (
        <form className={classes.form}>
            <label>Name</label>
            <input />
            <label>LastName</label>
            <input />
            <label>Password</label>
            <input />
            <button>send</button>

        </form>
    )
}
export default Form;