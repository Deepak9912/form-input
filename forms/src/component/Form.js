import {useState} from 'react';

const Forms = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState();

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;

    if(enteredNameIsValid){
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if(!enteredNameIsValid){
            return;
        }
        console.log(enteredName);
        setEnteredName('');
        setEnteredNameTouched(false);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlfor="name">Your Name</label>
                <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type="text" id="name" placeholder="type here" />
                {nameInputIsInvalid && <p>Name value must not be empty!</p>}
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default Forms;