import { useState, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './reset-password-form.module.css'
import { changePasswordRequest } from '../../../utils/burger-api'
import { Redirect } from 'react-router-dom'

export const ResetPasswordForm = () => {
    const [resetRequestState, setResetRequestState] = useState({
        success: false,
        message: ''
    });
    const [shouldRedirect, setRedirect] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [form, setFormValue] = useState({
        password: '',
        token: ''
    })

    const changePassword = useCallback(
        e => {
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
                    onChange={e => setFormValue({
                        ...form,
                        password: e.target.value
                    })}
                    name='password'
                    error={false}
                    errorText='Error!'
                    size='default'
                    onIconClick={()=>setPasswordVisibility(!passwordVisibility)}
                    icon={passwordVisibility ? 'HideIcon' : 'ShowIcon'}
                />
            </div>
            <div className='mb-6'>
                <Input
                    type='text'
                    placeholder='Введите код из письма'
                    value={form.token}
                    onChange={e => setFormValue({
                        ...form,
                        token: e.target.value
                    })}
                    name='token'
                    error={false}
                    errorText='Error!'
                    size='default'
                />
            </div>
            <div>
                <Button>Сохранить</Button>
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
