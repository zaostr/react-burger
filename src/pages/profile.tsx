import styles from './css/profile.module.css'
import { EditDataForm } from '../components/user/edit-data-form/edit-data-form'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NotFound404 } from './not-found';

export const ProfilePage = () => {
    const match = useRouteMatch();

  return (
    <main className={`${styles.main} pt-30`}>
        <div>
            <div className={`${styles.profileSideMenu}`}>
                <p>
                    <NavLink exact to={{pathname: '/profile'}} activeClassName={styles.active} className='text text_type_main-medium'>Профиль</NavLink>
                </p>
                <p>
                    <NavLink exact to={{pathname: '/profile/orders'}} activeClassName={styles.active} className='text text_type_main-medium'>История заказов</NavLink>
                </p>
                <p>
                    <NavLink exact to={{pathname: '/logout'}} className='text text_type_main-medium'>Выход</NavLink>
                </p>
            </div>
            <div className={`${styles.textDark} text text_type_main-default text_color_inactive mt-20`}>
                В этом разделе вы можете изменить свои персональные данные
            </div>
        </div>
        <div className={`${styles.fieldsWrapper}`}>
            {match.url === '/profile'
            ? (<EditDataForm />)
            : (<NotFound404 />)
            }
        </div>
    </main>
  )
}
