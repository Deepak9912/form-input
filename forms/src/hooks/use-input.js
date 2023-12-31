import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    //annonymus value function is executed here
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        enteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue, isValid: valueIsValid, hasError: hasError, valueChangeHandler, inputBlurHandler, reset
    };
}

export default useInput;