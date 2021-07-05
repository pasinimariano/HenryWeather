import { useState } from "react";


const useForm = (validate) => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleErrors = (event) => {
        const { name, value } = event.target;
        setErrors(validate({
            ...values,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(validate(values));
    };



    return { handleChange, handleErrors, values, handleSubmit, errors }
};

export default useForm;