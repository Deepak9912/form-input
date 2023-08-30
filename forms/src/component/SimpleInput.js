import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = () => {
    //enteredName
    const { value: enteredName, 
        isValid: enteredNameIsValid, 
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput(value => value.trim() !== '');
    //annonymus value function is defined above but not executed, passed to validateValue as parameter
    //enteredValue is passed into this value function

    //enteredEmail
    const {
        value: enteredEmail, 
        isValid: enteredEmailIsValid, 
        hasError: emailInputHasError, 
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler,
        reset: resetemailInput,
    } = useInput(value => value.includes('@')); 


    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        if (!enteredNameIsValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);
        //input validation
        resetNameInput();
        //email validation
        resetemailInput();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlfor="name">Your Name</label>
                <input onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" id="name" placeholder="type here" />
                {nameInputHasError && <p>Name value must not be empty!</p>}
            </div>
            <div>
                <label htmlfor="email">Type your email</label>
                <input onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} type="email" id="email" placeholder="type here" />
                {emailInputHasError && <p>Please enter a valid email!</p>}
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;