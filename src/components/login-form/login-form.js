import { useState, useRef, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './login-form.module.css'
import { useAuth } from '../../hooks/useAuth'

export const LoginForm = () => {
    const {signIn} = useAuth();
    //const [userEmailValue, setUserEmailValue] = useState('');
    //const [userPasswordValue, setUserPasswordValue] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [form, setFormValue] = useState({
        email: '',
        password: ''
    })

    const login = useCallback(
        e => {
          e.preventDefault();
          signIn(form);
        },
        [form]
      );

  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='loginForm'>
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
                    onIconClick={()=>{}}
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
                <Button onClick={login}>Войти</Button>
            </div>
        </form>
    </div>
  )
}
