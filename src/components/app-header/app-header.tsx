import { Component } from 'react'
import {
  Button,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './app-header.module.css'
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom'
    /* eslint-disable */
/*
export class AppHeader extends Component {
  render() {
    return (
      <header className='pt-4 pb-4'>
        <div>
          <nav className='headerLeft'>
            <div>
              <NavLink to="/" exact className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
                <Button htmlType='button' type="secondary">
                  <BurgerIcon type={'secondary'} />
                  Конструктор
                </Button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/feed" className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
                <Button htmlType='button' type='secondary'>
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
                <Button htmlType='button' type='secondary'>
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


import React from 'react'*/

export const AppHeader = () => {
  const history = useHistory();
  
  return (
    <header className='pt-4 pb-4'>
      <div>
        <nav className='headerLeft'>
          <div>
            <NavLink to={{pathname: '/'}} exact className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
              <Button htmlType='button' type="secondary">
                <BurgerIcon type={'secondary'} />
                Конструктор
              </Button>
            </NavLink>
          </div>
          <div>
            <NavLink to={{pathname: '/feed'}} className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
              <Button htmlType='button' type='secondary'>
                  <ListIcon type="secondary" />
                  Лента заказов
              </Button>
            </NavLink>
          </div>
        </nav>
        <Link to={{pathname: '/'}}>
          <Logo />
        </Link>
        <div className={appHeaderStyles.headerRight}>
          <div>
            <NavLink to={{pathname: '/profile'}} className={appHeaderStyles.headerBtn} activeClassName={appHeaderStyles.active}>
              <Button htmlType='button' type='secondary'>
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


export default AppHeader