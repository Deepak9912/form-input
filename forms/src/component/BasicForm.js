import React from 'react'
import useInput from '../hooks/use-input'

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const BasicForm = () => {
    const {value: enteredFirstName,
        isValid: InputFirstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,} = useInput('isNotEmpty');

    const {
        value: enteredSecondName, 
        isValid: InputSecondNameIsValid, 
        hasError: secondNameHasError,
        valueChangeHandler: secondNameChangeHandler,
        inputBlurHandler: secondNameBlurHandler,
        reset: resetSecondNameInput,} = useInput('isNotEmpty');
    
    const {
        value: enteredEmail, 
        isValid: emailIsValid, 
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetemailInput,} = useInput('isEmail');


    let formIsValid = false;

    if(InputFirstNameIsValid && InputSecondNameIsValid && emailIsValid){
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(!formIsValid){
            return;
        }
        console.log(enteredFirstName, enteredSecondName, enteredEmail);
        resetFirstNameInput('');
        resetSecondNameInput('');
        resetemailInput('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor='name'>First name</label>
                <input onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} type='text' id='name'/>
                {firstNameHasError && <p>Value is not valid!</p>}
            </div>
            <div>
                <label htmlFor='lname'>Last name</label>
                <input onChange={secondNameChangeHandler} onBlur={secondNameBlurHandler} value={enteredSecondName} type='text' id='lname' />
                {secondNameHasError && <p>Value is not valid!</p>}
            </div>
            <div>
                <label htmlFor='email'>First name</label>
                <input onChange={emailChangeHandler}  onBlur={emailBlurHandler} value={enteredEmail} type='email' id='email' />
                {emailHasError && <p>Email is not valid!</p>}
            </div>
            <div>
                <button disabled={!formIsValid} type='submit'>Add Form!</button>
            </div>
        </form>
    )
}

export default BasicForm;