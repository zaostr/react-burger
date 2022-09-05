import React, { Component } from 'react'
import { Button, BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './app-header.module.css'

export class AppHeader extends Component {
  render() {
    return (
      <header className='pt-4 pb-4'>
        <div>
          <nav className='headerLeft'>
            <div className={appHeaderStyles.headerBtn}>
              <a href="#">
                <Button type='secondary'>
                  <BurgerIcon />
                  Конструктор
                </Button>
              </a>
            </div>
            <div className={appHeaderStyles.headerBtnInactive}>
              <a href='#'>
                <Button type='secondary'>
                    <ListIcon type="secondary" />
                    Лента заказов
                </Button>
              </a>
            </div>
          </nav>
          <a href='/'>
            <Logo />
          </a>
          <div className={appHeaderStyles.headerRight}>
            <div className={appHeaderStyles.headerBtnInactive}>
              <a href='#'>
                <Button type='secondary'>
                  <ProfileIcon type="secondary" />
                  Личный кабинет
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader