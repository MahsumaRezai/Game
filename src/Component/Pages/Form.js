import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
    const [name, setname] = useState('');
    const [last, setlast] = useState('');
    const [password, setpassword] = useState('');

    const form = (event) => {
        event.preventDefault('');
        console.log(name, last, password)
    }
    const nameHandler = (event) => {
        setname(event.target.value)
    }
    const lastnameHandler = (event) => {
        setlast(event.target.value)
    }
    const passwordHandler = (event) => {
        setpassword(event.target.value)
    }



    return (
        <form className={classes.form} onSubmit={form}>
            <label>Name</label>
            <input onChange={nameHandler} />
            <label>LastName</label>
            <input onChange={lastnameHandler} />
            <label>Password</label>
            <input onChange={passwordHandler} />
            <button>send</button>

        </form>
    )
}
export default Form;