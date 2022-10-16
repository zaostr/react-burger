import { useState, useRef, useCallback } from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

import formStyles from './forgot-form.module.css'
import { useAuth } from '../../hooks/useAuth'

export const ForgotPasswordForm = () => {
    const {signIn} = useAuth();
    //const [userEmailValue, setUserEmailValue] = useState('');
    //const [userPasswordValue, setUserPasswordValue] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [form, setFormValue] = useState({
        email: ''
    })

    const forgotPassword = useCallback(
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
                <Button onClick={forgotPassword}>Восстановить</Button>
            </div>
        </form>
    </div>
  )
}
