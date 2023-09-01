import {useState} from 'react';

const PracForm = () => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredSurname, setEnteredSurname] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const surnameChangeHandler = (event) => {
        setEnteredSurname(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredName, enteredSurname, enteredEmail)
    }


    return <form onSubmit={formSubmitHandler}>
        <div>
            <label htmlfor="name">First Name</label>
            <input onChange={nameChangeHandler} value={enteredName} for="name" type='text' />
        </div>
        <div>
            <label htmlfor="surname">Last Name</label>
            <input onChange={surnameChangeHandler} value={enteredSurname} type='text' for="surname" />
        </div>
        <div>
            <label htmlfor="email">Email Address</label>
            <input onChange={emailChangeHandler} value={enteredEmail} type='email' for="email" />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

export default PracForm;