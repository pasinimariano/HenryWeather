const validateUsername = (input) => {
    let errors = {};

    if (!input.username) {
        errors.username = 'Username is required';
    } else if (!/\S+@\S+\. \S+/.test(username)) {
        errors.username = 'Username is invalid'
    }
    
    return errors
};

const validatePassword = (input) => {
    let errors = {};

    if (!input.password) {
        errors.password = 'Password is required';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Invalid password. At least one number is needed'
    }
;}

export default {validateUsername, validatePassword};