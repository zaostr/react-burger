import { Button, BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { Component } from 'react'
import appHeaderStyles from './app-header.module.css'
//import './app-header.css'

export class AppHeader extends Component {
  render() {
    return (
      <header className='pt-4 pb-4'>
        <div>
          <nav className='headerLeft'>
            <div className={appHeaderStyles.headerBtn}>
              <Button type='secondary' onClick={(e)=>console.log('click',e.target)}>
                <BurgerIcon />
                Конструктор
              </Button>
            </div>
            <div className={appHeaderStyles.headerBtnInactive}>
              <Button type='secondary' onClick={(e)=>console.log('click',e.target)}>
                <ListIcon type="secondary" />
                Лента заказов
              </Button>
            </div>
          </nav>
          <a href='/'>
            <Logo />
          </a>
          <div className={appHeaderStyles.headerRight}>
            <div className={appHeaderStyles.headerBtnInactive}>
              <Button type='secondary' onClick={(e)=>console.log('click',e.target)}>
                <ProfileIcon type="secondary" />
                Личный кабинет
              </Button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader