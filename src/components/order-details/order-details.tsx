import React from 'react'
import PropTypes from 'prop-types';

import orderDetailsStyle from './order-details.module.css'
import done from '../../assets/icons/done.svg'

export const OrderDetails = (props: {id: number;}) => {
  return (
    <div className={`${orderDetailsStyle.completeOrderWrapper} mt-20 mb-20`}>
        <p className={`${orderDetailsStyle.completeOrderNumber} text text_type_digits-large mb-8`}>{props.id}</p>
        <p className='text text_type_main-medium'>идентификатор заказа</p>
        <img className={`${orderDetailsStyle.completeOrderIconCheck} mt-15 mb-15`} src={done} alt="" width='120px' />
        <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
/*
OrderDetails.propTypes = {
  id: PropTypes.number.isRequired
}*/