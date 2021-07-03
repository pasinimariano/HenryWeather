import React, { useState } from 'react';
import { validateUsername, validatePassword } from '../functions/validate.jsx';


const SubmitForm = () => {

    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (state) => {
        setInput({
            ...input,
            [state.target.name]: state.target.value
        });
        setErrors(validateUsername({
            ...input,
            [state.target.name]: state.target.value
        }));
    };

    return (
        <form>
            <h2> WELCOME! </h2>
            <h2> LOGIN </h2>
            <input
                className={errors.username && 'danger'}
                type='text'
                name='username'
                value={input.username}
                onChange={handleInputChange}
                placeholder='USERNAME' />
            {errors.username && (
                <p className='danger'> {errors.username} </p>
            )}
            <input
                type='password'
                name='password'
                value={input.password}
                onChange={handleInputChange}
                placeholder='PASSWORD' />
            <button> Submit </button>
        </form>
    );
}

export default SubmitForm;