import { SyntheticEvent, useState } from 'react';


export function useForm<T>(inputValues: T) {
    const [form, setFormValue] = useState(inputValues);
  
    const handleChange = (event: SyntheticEvent) => {
        const {value, name} = event.target as HTMLInputElement;
        setFormValue({...form, [name]: value});
    };
    return {form, handleChange, setFormValue};
}