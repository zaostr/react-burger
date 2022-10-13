import { useState, useRef, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAuth } from '../../hooks/useAuth'

import formStyles from './register-form.module.css'

export const RegisterForm = () => {
    const {isAuthorized, register} = useAuth();
    //const [userNameValue, setUserNameValue] = useState('');
    //const [userEmailValue, setUserEmailValue] = useState('');
    //const [userPasswordValue, setUserPasswordValue] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [form, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const userRegister = useCallback(
        e => {
          e.preventDefault();
          register(form);
        },
        [form]
      );
  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='RegisterForm'>
            <div className='mb-6'>
                <Input
                    type='text'
                    placeholder='Имя'
                    value={form.name}
                    onChange={e => setFormValue({
                        ...form,
                        name: e.target.value
                    })}
                    ref={nameInputRef}
                    name='userName'
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
                    onChange={e => setFormValue({
                        ...form,
                        email: e.target.value
                    })}
                    ref={emailInputRef}
                    name='userEmail'
                    error={false}
                    errorText='Error!'
                    size='default'
                />
            </div>
            <div className='mb-6'>
                <Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Password'
                    value={form.password}
                    onChange={e => setFormValue({
                        ...form,
                        password: e.target.value
                    })}
                    ref={passwordInputRef}
                    name='userPassword'
                    error={false}
                    errorText='Error!'
                    size='default'
                    onIconClick={()=>setPasswordVisibility(!passwordVisibility)}
                    icon={passwordVisibility ? 'HideIcon' : 'ShowIcon'}
                />
            </div>
            <div>
                <Button onClick={userRegister}>Зарегистрироваться</Button>
            </div>
        </form>
    </div>
  )
}
