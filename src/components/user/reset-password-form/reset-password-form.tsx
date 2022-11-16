import { useState, useCallback, useRef, SyntheticEvent } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './reset-password-form.module.css'
import { changePasswordRequest } from '../../../utils/burger-api'
import { Redirect } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'

export const ResetPasswordForm = () => {
    const [resetRequestState, setResetRequestState] = useState({
        success: false,
        message: ''
    });
    const passwordInputRef = useRef<HTMLInputElement | null>(null);
    const [shouldRedirect, setRedirect] = useState<boolean>(false);
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const {form, handleChange} = useForm<{password: string; token: string;}>({
        password: '',
        token: ''
    })

    const changePassword = useCallback(
        (e: SyntheticEvent) => {
          e.preventDefault();
          setResetRequestState({
            success: false,
            message: ''
          });
          changePasswordRequest(form)
          .then(data => {
            setResetRequestState(data);
            setTimeout(() => {
                setRedirect(true);
            },5000)
          })
          .catch(err => {
            setResetRequestState(err);
          });
        },
        [form]
      );

    if ( shouldRedirect ) {
        return (<Redirect to={{
            pathname: '/login'
        }} />)
    }

  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='loginForm' onSubmit={changePassword}>
            <div className='mb-6'>
                <Input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder='Введите новый пароль'
                    value={form.password}
                    onChange={handleChange}
                    name='password'
                    error={false}
                    errorText='Error!'
                    size='default'
                    ref={passwordInputRef}
                    onIconClick={()=>{
                        passwordInputRef.current?.focus();
                        setPasswordVisibility(!passwordVisibility);
                    }}
                    icon={passwordVisibility ? 'HideIcon' : 'ShowIcon'}
                />
            </div>
            <div className='mb-6'>
                <Input
                    type='text'
                    placeholder='Введите код из письма'
                    value={form.token}
                    onChange={handleChange}
                    name='token'
                    error={false}
                    errorText='Error!'
                    size='default'
                />
            </div>
            <div>
                <Button htmlType='submit'>Сохранить</Button>
            </div>
            {
                (resetRequestState.message !== '') && (
                    <div className='text text_type_main-default text_color_inactive mt-4'>{ `${resetRequestState.message}`}<br/>{ `${resetRequestState.success ? 'Перенаправляем вас на страницу входа. 3.. 2.. 1..' : 'Ошибка!'}` }</div>
                )
            }
        </form>
    </div>
  )
}
