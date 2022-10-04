import { useRef } from 'react'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { cartSortList } from '../../../../services/actions/cart'

import BurgerConstructorElementStyles from './burger-constructor-element.module.css'

import { ingredientType } from '../../../../utils/types';
import { useDispatch } from 'react-redux';
import { cartRemoveItem } from '../../../../services/actions/cart'
import { useDrop, useDrag } from 'react-dnd';

export const BurgerConstructorElement = ({ ingredient, index }) => {
    const refCartItem = useRef(null);
    const dispatch = useDispatch();

    const [{ opacity }, drag] = useDrag({
        type: 'cart-item',
        item: { 
            ...ingredient,
            cartIndex: index
        },
        collect: monitor => ({
          isDrag: monitor.isDragging(),
          opacity: monitor.isDragging() ? 0 : 1
        })
    })

    const [, drop] = useDrop({
      accept: 'cart-item',
      collect: monitor => ({
        isCartItemHover: monitor.isOver()
      }),
      hover: (item, monitor) => {
        if (!refCartItem.current) {
            return
        }

        const dragIndex = item.cartIndex;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
            return
        }
        
        const hoverBoundingRect = refCartItem.current?.getBoundingClientRect();
        
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            
        const clientOffset = monitor.getClientOffset()
        
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        dispatch( cartSortList(dragIndex, hoverIndex, item) );

        item.cartIndex = hoverIndex;
      }
    })


    drag(drop(refCartItem));

    function removeConstructorElement(index) {
        dispatch(cartRemoveItem(index))
    }

    return (
        <div ref={refCartItem} className={BurgerConstructorElementStyles.ConstructorElementWrapper} style={{opacity}}>
            <DragIcon type="primary" />
            <ConstructorElement
            isLocked={false}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={()=>removeConstructorElement(index)}
            />
        </div>
    )
}
BurgerConstructorElement.propTypes = {
    ingredient: ingredientType.isRequired,
    index: PropTypes.number
}
