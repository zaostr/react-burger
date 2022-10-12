import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/login-form/login-form'

import loginStyles from './css/login.module.css'

export const LoginPage = () => {
  return (
    <main className={`${loginStyles.main} pl-5 pr-5`}>
        <div className={`${loginStyles.wrapper}`}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <div className='mb-20'>
                <LoginForm />
            </div>
            <p className='text text_type_main-default text_color_inactive mb-4'>
                <span className='mr-2'>Вы — новый пользователь?</span>
                <Link to='/register'>Зарегистрироваться</Link>
            </p>
            <p className='text text_type_main-default text_color_inactive'>
                <span className='mr-2'>Забыли пароль?</span>
                <Link to='/reset-password'>Восстановить пароль</Link>
            </p>
        </div>
    </main>
  )
}
