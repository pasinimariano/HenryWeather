import React from 'react';
import useForm from '../functions/useForm.jsx';
import validate from '../functions/validate.jsx';


const SubmitForm = () => {

    const { handleChange, handleErrors, values, handleSubmit, errors } = useForm(validate);

    return (
        <form onSubmit={handleSubmit}>
            <h2> WELCOME! </h2>
            <h2> LOGIN </h2>
            <input
                id='username'
                type='text'
                name='username'
                className='InputUsername'
                placeholder='USERNAME'
                value={values.username}
                onChange={handleChange}
                onBlur={handleErrors}
            />
            {errors.username && <p>{errors.username}</p>}
            <input
                id='password'
                type='password'
                name='password'
                className='InputPassword'
                placeholder='PASSWORD'
                value={values.password}
                onChange={handleChange}
                onBlur={handleErrors}
            />
            {errors.password && <p>{errors.password}</p>}
            <button> Submit </button>
        </form>
    );
}

export default SubmitForm;