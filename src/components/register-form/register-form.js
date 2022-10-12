import { useState, useRef } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './register-form.module.css'

export const RegisterForm = () => {
    const [userNameValue, setUserNameValue] = useState('');
    const [userEmailValue, setUserEmailValue] = useState('');
    const [userPasswordValue, setUserPasswordValue] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='RegisterForm'>
            <div className='mb-6'>
                <Input
                    type='text'
                    placeholder='Имя'
                    value={userNameValue}
                    onChange={e => setUserNameValue(e.target.value)}
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
                    value={userEmailValue}
                    onChange={e => setUserEmailValue(e.target.value)}
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
                    value={userPasswordValue}
                    onChange={e => setUserPasswordValue(e.target.value)}
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
                <Button>Зарегистрироваться</Button>
            </div>
        </form>
    </div>
  )
}
