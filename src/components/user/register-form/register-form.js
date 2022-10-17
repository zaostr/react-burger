import { useState, useRef } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAuth } from '../../../hooks/useAuth'

import formStyles from './register-form.module.css'
import { useForm } from '../../../hooks/useForm'
//import { Redirect } from 'react-router-dom'

export const RegisterForm = () => {
    const { register } = useAuth();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const {form, handleChange} = useForm({
        name: '',
        email: '',
        password: ''
    });
    const [registrationError, setRegistrationError] = useState(false);

    const userRegister = async e => {
        e.preventDefault();
        setRegistrationError(false);
        const test = await register(form);
        setRegistrationError(test);
    };
    
    /*if (endRegistration) {
        <Redirect to={{pathname:'/',state:{isRegistered: true}}} />
    }*/

  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='RegisterForm'>
            <div className='mb-6'>
                <Input
                    type='text'
                    placeholder='Имя'
                    value={form.name}
                    onChange={handleChange}
                    ref={nameInputRef}
                    name='name'
                    error={false}
                    errorText='Error!'
                    size='default'
                />
            </div>
            <div className='mb-6'>
                <Input
                    type='email'
                    placeholder='E-mail'
                    value={form.email}
                    onChange={handleChange}
                    ref={emailInputRef}
                    name='email'
                    error={registrationError ? true : false }
                    errorText={registrationError ? registrationError : 'Error!'}
                    size='default'
                />
            </div>
            <div className='mb-6'>
                <Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Password'
                    value={form.password}
                    onChange={handleChange}
                    ref={passwordInputRef}
                    name='password'
                    error={false}
                    errorText='Error!'
                    size='default'
                    onIconClick={()=>{
                        passwordInputRef.current.focus();
                        setPasswordVisibility(!passwordVisibility)
                    }}
                    icon={passwordVisibility ? 'HideIcon' : 'ShowIcon'}
                />
            </div>
            <div>
                <Button onClick={userRegister}>Зарегистрироваться</Button>
            </div>
            {
                (registrationError) && (
                    <div className='text text_type_main-default text_color_inactive mt-4'>{ registrationError }</div>
                )
            }
        </form>
    </div>
  )
}
