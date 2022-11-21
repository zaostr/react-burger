
import { Link } from 'react-router-dom'
import { RegisterForm } from '../components/user/register-form/register-form'

import registerStyles from './css/login.module.css'

export const RegisterPage = () => {
    return (
		<main className={`${registerStyles.main} pl-5 pr-5`}>
			<div className={`${registerStyles.wrapper}`}>
					<p className="text text_type_main-medium mb-6">Регистрация</p>
					<div className='mb-20'>
						<RegisterForm />
					</div>
					<p className='text text_type_main-default text_color_inactive mb-4'>
						<span className='mr-2'>Уже зарегистрированы?</span>
						<Link to='/login'>Войти</Link>
					</p>
			</div>
		</main>
    )
}
