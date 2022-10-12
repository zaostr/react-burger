import { Component } from 'react'
import {
  Button,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './app-header.module.css'
import { Link } from 'react-router-dom'

export class AppHeader extends Component {
  render() {
    /* eslint-disable */
    return (
      <header className='pt-4 pb-4'>
        <div>
          <nav className='headerLeft'>
            <div className={appHeaderStyles.headerBtn}>
              <Link to="/">
                <Button type='secondary'>
                  <BurgerIcon />
                  Конструктор
                </Button>
              </Link>
            </div>
            <div className={appHeaderStyles.headerBtnInactive}>
              <Link to="/">
                <Button type='secondary'>
                    <ListIcon type="secondary" />
                    Лента заказов
                </Button>
              </Link>
            </div>
          </nav>
          <Link to="/">
            <Logo />
          </Link>
          <div className={appHeaderStyles.headerRight}>
            <div className={appHeaderStyles.headerBtnInactive}>
              <Link to="/profile">
                <Button type='secondary'>
                  <ProfileIcon type="secondary" />
                  Личный кабинет
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader