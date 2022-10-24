import { Component } from 'react'
import {
  Button,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './app-header.module.css'
import { NavLink, Link } from 'react-router-dom'

export class AppHeader extends Component {
  render() {
    /* eslint-disable */
    return (
      <header className='pt-4 pb-4'>
        <div>
          <nav className='headerLeft'>
            <div>
              <NavLink to="/" exact className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
                <Button type='secondary'>
                  <BurgerIcon />
                  Конструктор
                </Button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/feed" className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
                <Button type='secondary'>
                    <ListIcon type="secondary" />
                    Лента заказов
                </Button>
              </NavLink>
            </div>
          </nav>
          <Link to="/">
            <Logo />
          </Link>
          <div className={appHeaderStyles.headerRight}>
            <div>
              <NavLink to="/profile" className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
                <Button type='secondary'>
                  <ProfileIcon type="secondary" />
                  Личный кабинет
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader