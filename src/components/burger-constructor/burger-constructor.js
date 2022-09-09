import React, { Component } from 'react'
import BurgerConstructorFooter from './burger-constructor-footer/burger-constructor-footer'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'

import burgerConstructorStyles from './burger-constructor.module.css'


export class BurgerConstructor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='mt-25'>

        <BurgerConstructorElements data={this.props.data} />
        
        <BurgerConstructorFooter />
      </div>
    )
  }
}

export default BurgerConstructor