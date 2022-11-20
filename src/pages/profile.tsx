import styles from './css/profile.module.css'
import { EditDataForm } from '../components/user/edit-data-form/edit-data-form'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'
import { NotFound404 } from './not-found';
import { UserOrdersFeed } from '../components/user-orders-feed/user-orders-feed';
import { OrderDetailsPopup } from '../components/order-details-popup/order-details-popup';

export const ProfilePage = () => {
  const location = useLocation<Location & {background?: Location | undefined;}>();

  const background = location.state && location.state?.background;

  return (
    <main className={`${styles.main}`}>
        <div>
            <div className={`${styles.profileSideMenu} pt-30`}>
                <p>
                    <NavLink exact to={{pathname: '/profile'}} activeClassName={styles.active} className='text text_type_main-medium'>Профиль</NavLink>
                </p>
                <p>
                    <NavLink exact to={{pathname: '/profile/orders'}} activeClassName={styles.active} className='text text_type_main-medium'>История заказов</NavLink>
                </p>
                <p>
                    <a href='#' className='text text_type_main-medium'>Выход</a>
                </p>
            </div>
            <div className={`${styles.textDark} text text_type_main-default text_color_inactive mt-20`}>
                В этом разделе вы можете изменить свои персональные данные
            </div>
        </div>
        <div className={`${styles.fieldsWrapper}`}>
            <Switch>
                <Route path={'/profile'} exact component={EditDataForm} />
                <Route path={'/profile/orders'} exact component={UserOrdersFeed} />
                <Route path={'/logout'} exact component={NotFound404} />
                <Route path={'*'} exact component={NotFound404} />
            </Switch>
          {background && (
            <Route path="/profile/orders/:id" exact component={OrderDetailsPopup}/>
          )}
        </div>
    </main>
  )
}
