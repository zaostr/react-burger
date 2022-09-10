import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BurgerConstructorFooter from './burger-constructor-footer/burger-constructor-footer'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'

import burgerConstructorStyles from './burger-constructor.module.css'

import { ingredientType } from '../../utils/types';

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
BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerConstructor