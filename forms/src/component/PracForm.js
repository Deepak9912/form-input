import {useState} from 'react';

const PracForm = () => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const enteredNameNotValid = !enteredNameIsValid && enteredNameTouched;
    
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        //form validation
        if(!enteredNameIsValid){
            return;
        }
        setEnteredName('')
        setEnteredNameTouched(false);
    }

    return <form onSubmit={formSubmitHandler}>
        <div>
            <label htmlfor="name">First Name</label>
            <input onChange={nameChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} id="name" type='text' />
            {enteredNameNotValid && <p>Empty form cannot be submitted!!</p>}
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

export default PracForm;