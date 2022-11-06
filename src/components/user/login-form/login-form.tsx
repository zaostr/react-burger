import { useState, useRef, useCallback, SyntheticEvent } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './login-form.module.css'
import { useAuth } from '../../../hooks/useAuth'
import { useForm } from '../../../hooks/useForm'

export const LoginForm = () => {
    const {signIn} = useAuth();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [loginError, setLoginError] = useState<boolean | string>(false);
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const passwordInputRef = useRef<HTMLInputElement | null>(null);
    const {form, handleChange} = useForm<{email: string; password: string;}>({
        email: '',
        password: ''
    })

    const login = useCallback(
        async (e: SyntheticEvent) => {
          e.preventDefault();
          const loginResult = await signIn(form);
          setLoginError(loginResult);
        },
        [form, signIn]
      );

  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='loginForm' onSubmit={login}>
            <div className='mb-6'>
                <Input
                    type='email'
                    placeholder='E-mail'
                    value={form.email}
                    onChange={handleChange}
                    ref={emailInputRef}
                    name='email'
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
                    onChange={handleChange}
                    ref={passwordInputRef}
                    name='password'
                    error={false}
                    errorText='Error!'
                    size='default'
                    onIconClick={()=>{
                        passwordInputRef.current?.focus();
                        setPasswordVisibility(!passwordVisibility)
                    }}
                    icon={passwordVisibility ? 'HideIcon' : 'ShowIcon'}
                />
            </div>
            <div>
                <Button htmlType="submit">Войти</Button>
            </div>
            {
                (loginError) && (
                    <div className='text text_type_main-default text_color_inactive mt-4'>{ loginError }</div>
                )
            }
        </form>
    </div>
  )
}
