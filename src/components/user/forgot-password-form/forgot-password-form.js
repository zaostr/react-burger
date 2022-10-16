import { useState, useRef, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './forgot-password-form.module.css'
import { resetPasswordRequest } from '../../../utils/burger-api'
import { Redirect, useLocation } from 'react-router-dom'

export const ForgotPasswordForm = () => {
    const location = useLocation();
    const [resetRequestState, setResetRequestState] = useState(false);
    const emailInputRef = useRef(null);
    const [form, setFormValue] = useState({
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
            <div>
                <Button>Восстановить</Button>
            </div>
        </form>
    </div>
  )
}
