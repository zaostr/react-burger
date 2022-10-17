import { useState, useRef, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './forgot-password-form.module.css'
import { resetPasswordRequest } from '../../../utils/burger-api'
import { Redirect, useLocation } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'

export const ForgotPasswordForm = () => {
    const location = useLocation();
    const [resetRequestState, setResetRequestState] = useState(false);
    const emailInputRef = useRef(null);
    const {form, handleChange} = useForm({
        email: ''
    })

    const forgotPassword = useCallback(
        e => {
          e.preventDefault();
          resetPasswordRequest(form)
          .then(data => {
            setResetRequestState(true)
          });
        },
        [form]
      );

    if ( resetRequestState ) {
        return (<Redirect to={{
            pathname: '/reset-password',
            state: {from: location}
        }} />)
    }

  return (
    <div className={`${formStyles.wrapper}`}>
        <form className='loginForm' onSubmit={forgotPassword}>
            <div className='mb-6'>
                <Input
                    type='email'
                    placeholder='Укажите e-mail'
                    value={form.email}
                    onChange={handleChange}
                    ref={emailInputRef}
                    name='email'
                    error={false}
                    errorText='Error!'
                    size='default'
                />
            </div>
            <div>
                <Button>Восстановить</Button>
            </div>
        </form>
    </div>
  )
}
