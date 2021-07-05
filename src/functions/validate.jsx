const validate = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = 'Username required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
        errors.username = 'Username is invalid'
    }
    
    if (!values.password) {
        errors.password = 'Password required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    } else if ((!/(?=.*[0-9])/.test(values.password))) {
        errors.password = 'Invalid password: At least one number is needed'
    }

    return errors
};

export default validate;