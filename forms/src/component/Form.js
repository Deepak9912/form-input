import {useState} from 'react';

const Forms = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredTouchedEmail] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const entedredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvalid = !entedredEmailIsValid && enteredEmailTouched;


    let formIsValid = false;

    if(enteredNameIsValid && entedredEmailIsValid){
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }
    
    const emailInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        setEnteredTouchedEmail(true);
        if(!enteredNameIsValid){
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);
        //input validation
        setEnteredNameTouched(false);
        //email validation
        setEnteredEmail('');
        setEnteredTouchedEmail(false);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlfor="name">Your Name</label>
                <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type="text" id="name" placeholder="type here" />
                {nameInputIsInvalid && <p>Name value must not be empty!</p>}
            </div>
            <div>
                <label htmlfor="email">Type your email</label>
                <input onChange={emailChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} type="email" id="email" placeholder="type here" />
                {enteredEmailIsInvalid && <p>Please enter a valid email!</p>}
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default Forms;