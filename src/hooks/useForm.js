import { useState } from 'react';

export function useForm(inputValues) {
    const [form, setFormValue] = useState(inputValues);
  
    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValue({...form, [name]: value});
    };
    return {form, handleChange, setFormValue};
}