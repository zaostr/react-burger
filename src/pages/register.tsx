import { useState, useEffect } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { RegisterForm } from '../components/user/register-form/register-form'
import { useSelector } from 'react-redux'

import registerStyles from './css/login.module.css'

export const RegisterPage = () => {
    // @ts-ignore
    const {isAuthorized} = useSelector(store => store.auth);
    const { getUser } = useAuth();
    const [shouldRedirect, setRedirect] = useState(isAuthorized);
    const {state} = useLocation<Location & {from?: Location | string;}>();

    const init = async () => {
        await getUser();
    };

    /* eslint-disable */
    useEffect(() => {
        init();
    }, []);
    /* eslint-enable */

    useEffect(() => {
        setRedirect(isAuthorized);
    }, [isAuthorized])

    if ( shouldRedirect ) {
        return (
            <Redirect to={ state?.from || '/' } />
        )
    }


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
